<?php
/*
Plugin Name: Two Factor Authentication
Plugin URI: https://www.simbahosting.co.uk/s3/product/two-factor-authentication/
Description: Secure your WordPress login forms with two factor authentication - including WooCommerce login forms
Author: David Nutbourne + David Anderson, original plugin by Oskar Hane
Author URI: https://www.simbahosting.co.uk
Version: 1.3.13
Text Domain: two-factor-authentication
Domain Path: /languages
License: GPLv2 or later
*/

define('SIMBA_TFA_PLUGIN_DIR', dirname( __FILE__ ));
define('SIMBA_TFA_PLUGIN_URL', plugins_url('', __FILE__));

class Simba_Two_Factor_Authentication {

	public $version = '1.3.13';

	private $php_required = '5.3';

	private $frontend;

	/**
	 * Constructor, run upon plugin initiation
	 */
	public function __construct() {

		if (version_compare(PHP_VERSION, $this->php_required, '<' )) {
			add_action('all_admin_notices', array($this, 'admin_notice_insufficient_php'));
			$abort = true;
		}

		if (!function_exists('mcrypt_get_iv_size') && !function_exists('openssl_cipher_iv_length')) {
			add_action('all_admin_notices', array($this, 'admin_notice_missing_mcrypt_and_openssl'));
			$abort = true;
		}

		if (!empty($abort)) return;

		if (file_exists(SIMBA_TFA_PLUGIN_DIR.'/premium.php')) include_once(SIMBA_TFA_PLUGIN_DIR.'/premium.php');

		add_action('wp_ajax_nopriv_simbatfa-init-otp', array($this, 'tfaInitLogin'));
		add_action('wp_ajax_simbatfa-init-otp', array($this, 'tfaInitLogin'));

		add_action('wp_ajax_simbatfa_shared_ajax', array($this, 'shared_ajax'));

		// This is needed for the login form on the dedicated payment page (e.g. /checkout/order-pay/123456/?pay_for_order=true&key=wc_order_blahblahblah)
		add_action('woocommerce_login_form_start', array($this, 'woocommerce_before_customer_login_form'));
		
		add_action('woocommerce_before_customer_login_form', array($this, 'woocommerce_before_customer_login_form'));
		// The login form on the checkout doesn't call the woocommerce_before_customer_login_form action
		add_action('woocommerce_before_checkout_form', array($this, 'woocommerce_before_customer_login_form'));

		add_action('affwp_login_fields_before', array($this, 'affwp_login_fields_before'));
		if (!defined('TWO_FACTOR_DISABLE') || !TWO_FACTOR_DISABLE) {
			add_action('affwp_process_login_form', array($this, 'affwp_process_login_form'));
		}
		
		add_filter('tml_display', array($this, 'tml_display'));
		
		add_filter('do_shortcode_tag', array($this, 'do_shortcode_tag'), 10, 2);
		
		if (is_admin()) {
			//Save settings
			add_action('admin_init', array($this, 'check_possible_reset'));
			
			//Add to Settings menu on sites
			add_action('admin_menu', array($this, 'menu_entry_for_admin'));

			//Add settings link in plugin list
			$plugin = plugin_basename(__FILE__); 
			add_filter("plugin_action_links_".$plugin, array($this, 'addPluginSettingsLink' ));
			add_filter('network_admin_plugin_action_links_'.$plugin, array($this, 'addPluginSettingsLink' ));

			// Entry that everybody gets
			add_action('network_admin_menu', array($this, 'admin_menu'));
			add_action('admin_menu', array($this, 'admin_menu'));

			// Add TFA column on users list.
			add_action( 'manage_users_columns', array( $this, 'manageUsersColumnsTFA' ), 10, 1 );
			add_action( 'manage_users_custom_column', array( $this, 'manageUsersCustomColumnTFA' ), 10, 3 );

			// Needed users.php CSS.
			add_action( 'admin_print_styles-users.php', array( $this, 'load_users_css' ), 10, 0 );

		} else {
			add_action('init', array($this, 'check_possible_reset'));
		}

		add_action('plugins_loaded', array($this, 'plugins_loaded'));
		add_action('init', array($this, 'init'));

		// Show off-sync message for hotp
		add_action('admin_notices', array($this, 'tfaShowHOTPOffSyncMessage'));
		
		// We want to run first if possible, so that we're not aborted by JavaScript exceptions in other components (our code is critical to the login process for TFA users)
		// Unfortunately, though, people start enqueuing from init onwards (before that is buggy - https://core.trac.wordpress.org/ticket/11526), so, we try to detect the login page and go earlier there. 
		if (isset($GLOBALS['pagenow']) && 'wp-login.php' === $GLOBALS['pagenow']) {
			add_action('init', array($this, 'login_enqueue_scripts'), -99999999999);
		} else {
			add_action('login_enqueue_scripts', array($this, 'login_enqueue_scripts'), -99999999999);
		}
		
		if (!defined('TWO_FACTOR_DISABLE') || !TWO_FACTOR_DISABLE) {
			add_filter('authenticate', array($this, 'tfaVerifyCodeAndUser'), 99999999999, 3);
		}

		if (file_exists(SIMBA_TFA_PLUGIN_DIR.'/updater.php')) include_once(SIMBA_TFA_PLUGIN_DIR.'/updater.php');

		if (defined('DOING_AJAX') && DOING_AJAX && defined('WP_ADMIN') && WP_ADMIN && !empty($_REQUEST['action']) && 'simbatfa-init-otp' == $_REQUEST['action']) {
			// Try to prevent PHP notices breaking the AJAX conversation
			$this->output_buffering = true;
			$this->logged = array();
			set_error_handler(array($this, 'get_php_errors'), E_ALL & ~E_STRICT);
			ob_start();
		}

	}

	// Ultimate Membership Pro support
	public function do_shortcode_tag($output, $tag) {
		if ('ihc-login-form' == $tag) $this->login_enqueue_scripts();
		return $output;
	}

	public function get_php_errors($errno, $errstr, $errfile, $errline) {
		if (0 == error_reporting()) return true;
		$logline = $this->php_error_to_logline($errno, $errstr, $errfile, $errline);
		$this->logged[] = $logline;
		# Don't pass it up the chain (since it's going to be output to the user always)
		return true;
	}

	public function php_error_to_logline($errno, $errstr, $errfile, $errline) {
		switch ($errno) {
			case 1:		$e_type = 'E_ERROR'; break;
			case 2:		$e_type = 'E_WARNING'; break;
			case 4:		$e_type = 'E_PARSE'; break;
			case 8:		$e_type = 'E_NOTICE'; break;
			case 16:	$e_type = 'E_CORE_ERROR'; break;
			case 32:	$e_type = 'E_CORE_WARNING'; break;
			case 64:	$e_type = 'E_COMPILE_ERROR'; break;
			case 128:	$e_type = 'E_COMPILE_WARNING'; break;
			case 256:	$e_type = 'E_USER_ERROR'; break;
			case 512:	$e_type = 'E_USER_WARNING'; break;
			case 1024:	$e_type = 'E_USER_NOTICE'; break;
			case 2048:	$e_type = 'E_STRICT'; break;
			case 4096:	$e_type = 'E_RECOVERABLE_ERROR'; break;
			case 8192:	$e_type = 'E_DEPRECATED'; break;
			case 16384:	$e_type = 'E_USER_DEPRECATED'; break;
			case 30719:	$e_type = 'E_ALL'; break;
			default:	$e_type = "E_UNKNOWN ($errno)"; break;
		}

		if (!is_string($errstr)) $errstr = serialize($errstr);

		if (0 === strpos($errfile, ABSPATH)) $errfile = substr($errfile, strlen(ABSPATH));

		return "PHP event: code $e_type: $errstr (line $errline, $errfile)";

	}

	/**
	 * Runs upon the WordPress 'init' action
	 */
	public function init() {
		if ((!is_admin() || (defined('DOING_AJAX') && DOING_AJAX)) && is_user_logged_in() && file_exists(SIMBA_TFA_PLUGIN_DIR.'/includes/tfa_frontend.php')) {
			$this->load_frontend();
		} else {
			add_shortcode('twofactor_user_settings', array($this, 'shortcode_when_not_logged_in'));
		}
	}

	public function admin_notice_insufficient_php() {
		$this->show_admin_warning('<strong>'.__('Higher PHP version required', 'two-factor-authentication').'</strong><br> '.sprintf(__('The Two Factor Authentication plugin requires PHP version %s or higher - your current version is only %s.', 'two-factor-authentication'), $this->php_required, PHP_VERSION), 'error');
	}

	public function admin_notice_missing_mcrypt_and_openssl() {
		$this->show_admin_warning('<strong>'.__('PHP OpenSSL or mcrypt module required', 'two-factor-authentication').'</strong><br> '.__('The Two Factor Authentication plugin requires either the PHP openssl (preferred) or mcrypt module to be installed. Please ask your web hosting company to install one of them.', 'two-factor-authentication'), 'error');
	}

	public function show_admin_warning($message, $class = "updated") {
		echo '<div class="tfamessage '.$class.'">'."<p>$message</p></div>";
	}

	/**
	 * Return a new Simba_TFA object
	 *
	 * @returns Simba_TFA
	 */
	public function getTFA() {
		if (!class_exists('HOTP')) require_once(SIMBA_TFA_PLUGIN_DIR.'/hotp-php-master/hotp.php');
		if (!class_exists('Base32')) require_once(SIMBA_TFA_PLUGIN_DIR.'/Base32/Base32.php');
		if (!class_exists('Simba_TFA')) require_once(SIMBA_TFA_PLUGIN_DIR.'/includes/class-simba-tfa.php');
		
		$tfa = new Simba_TFA(new Base32(), new HOTP());
		
		return $tfa;
	}

	// "Shared" - i.e. could be called from either front-end or back-end
	public function shared_ajax() {
		if (empty($_POST['subaction']) || empty($_POST['nonce']) || !is_user_logged_in() || !wp_verify_nonce($_POST['nonce'], 'tfa_shared_nonce')) die('Security check (3).');

		if ($_POST['subaction'] == 'refreshotp') {

			global $current_user;

			$tfa_priv_key_64 = get_user_meta($current_user->ID, 'tfa_priv_key_64', true);

			if (!$tfa_priv_key_64) {
				echo json_encode(array('code' => ''));
				die;
			}

			echo json_encode(array('code' => $this->getTFA()->generateOTP($current_user->ID, $tfa_priv_key_64)));
			exit;
		}

	}

	public function tfaInitLogin() {

		if (empty($_POST['user'])) die('Security check (2).');

		if (defined('TWO_FACTOR_DISABLE') && TWO_FACTOR_DISABLE) {
			$res = false;
		} else {
			$res = $this->getTFA()->preAuth(array('log' => (string)$_POST['user']));
		}

		$results = array('jsonstarter' => 'justhere', 'status' => $res);

		if (!empty($this->output_buffering)) {
			if (!empty($this->logged)) {
				$results['php_output'] = $this->logged;
			}
			restore_error_handler();
			$buffered = ob_get_clean();
			if ($buffered) $results['extra_output'] = $buffered;
		}

		$results = apply_filters('simbatfa_check_tfa_requirements_ajax_response', $results);
		
		echo json_encode($results);
		
		exit;
	}
	

	// Here's where the login action happens. Called on the 'authenticate' action.
	public function tfaVerifyCodeAndUser($user, $username, $password) {

		if (is_wp_error($user)) {
			$ret = $user;
		} else {

			$tfa = $this->getTFA();
			$params = $_POST;
			$params['log'] = $username;
			$params['caller'] = $_SERVER['PHP_SELF'] ? $_SERVER['PHP_SELF'] : $_SERVER['REQUEST_URI'];
			
			$code_ok = $tfa->authUserFromLogin($params);
			
			if (is_wp_error($code_ok)) {
				$ret = $code_ok;
			} elseif (!$code_ok) {
				$ret =  new WP_Error('authentication_failed', '<strong>'.__('Error:', 'two-factor-authentication').'</strong> '.__('The one-time password (TFA code) you entered was incorrect.', 'two-factor-authentication'));
			} elseif ($user) {
				$ret = $user;
			} else {
				$ret = wp_authenticate_username_password(null, $username, $password);
			}
			
		}
		
		return apply_filters('simbatfa_verify_code_and_user_result', $ret, $user, $username, $password);
	}
	
	public function tfaRegisterTwoFactorAuthSettings() {
		global $wp_roles;
		if (!isset($wp_roles))
			$wp_roles = new WP_Roles();
		
		foreach($wp_roles->role_names as $id => $name)
		{
			register_setting('tfa_user_roles_group', 'tfa_'.$id);
			register_setting('tfa_user_roles_required_group', 'tfa_required_'.$id);
		}
		if (is_multisite()) {
			register_setting('tfa_user_roles_group', 'tfa__super_admin');
			register_setting('tfa_user_roles_required_group', 'tfa_required__super_admin');
		}
		
		register_setting('tfa_user_roles_required_group', 'tfa_requireafter');
		register_setting('simba_tfa_default_hmac_group', 'tfa_default_hmac');
		register_setting('tfa_xmlrpc_status_group', 'tfa_xmlrpc_on');
	}

	/**
	 * Print the radio buttons for enabling/disabling TFA
	 *
	 * @param Integer $user_id	  - the WordPress user ID
	 * @param Boolean $long_label - whether to use a long label rather than a short one
	 */ 
	public function tfaListEnableRadios($user_id, $long_label = false) {
		if (!$user_id) return;
			
		$setting = get_user_meta($user_id, 'tfa_enable_tfa', true);
		$setting = !$setting ? false : $setting;
		
		$tfa = $this->getTFA();

		if ($tfa->isRequiredForUser($user_id)) {
			$requireafter = absint($this->get_option('tfa_requireafter'));

			echo '<p class="tfa_required_warning" style="font-weight:bold; font-style:italic;">'.sprintf(__('N.B. This site is configured to forbid you to log in if you disable two-factor authentication after your account is %d days old', 'two-factor-authentication'), $requireafter).'</p>';
		}

		$tfa_enabled_label = $long_label ? __('Enable two-factor authentication', 'two-factor-authentication') : __('Enabled', 'two-factor-authentication');
		$tfa_disabled_label = $long_label ? __('Disable two-factor authentication', 'two-factor-authentication') : __('Disabled', 'two-factor-authentication');

		print '<input type="radio" class="tfa_enable_radio" id="tfa_enable_tfa_true" name="tfa_enable_tfa" value="true" '.($setting == true ? 'checked="checked"' :'').'> <label class="tfa_enable_radio_label" for="tfa_enable_tfa_true">'.apply_filters('simbatfa_radiolabel_enabled', $tfa_enabled_label, $long_label).'</label> <br>';

		print '<input type="radio" class="tfa_enable_radio" id="tfa_enable_tfa_false" name="tfa_enable_tfa" value="false" '.($setting == false ? 'checked="checked"' :'').'> <label class="tfa_enable_radio_label" for="tfa_enable_tfa_false">'.apply_filters('simbatfa_radiolabel_disabled', $tfa_disabled_label, $long_label).'</label> <br>';
	}
		

	public function tfaListAlgorithmRadios($user_id) {
		if (!$user_id) return;
				
		$types = array('totp' => __('TOTP (time based - most common algorithm; used by Google Authenticator)', 'two-factor-authentication'), 'hotp' => __('HOTP (event based)', 'two-factor-authentication')); 
		
		$setting = get_user_meta($user_id, 'tfa_algorithm_type', true);
		$setting = $setting === false || !$setting ? 'totp' : $setting;

		foreach($types as $id => $name) {
			print '<input type="radio" id="tfa_algorithm_type_'.esc_attr($id).'" name="tfa_algorithm_type" value="'.$id.'" '.($setting == $id ? 'checked="checked"' :'').'> <label for="tfa_algorithm_type_'.esc_attr($id).'">'.$name."</label><br>\n";
		}
	}

	public function get_option($key) {
		if (!is_multisite()) return get_option($key);
		switch_to_blog(1);
		$v = get_option($key);
		restore_current_blog();
		return $v;
	}

	public function tfaListUserRolesCheckboxes()
	{

		if (is_multisite()) {
			// Not a real WP role; needs separate handling
			$id = '_super_admin';
			$name = __('Multisite Super Admin', 'two-factor-authentication');
			$setting = $this->get_option('tfa_'.$id);
			$setting = $setting === false || $setting ? 1 : 0;
			
			print '<input type="checkbox" id="tfa_'.$id.'" name="tfa_'.$id.'" value="1" '.($setting ? 'checked="checked"' :'').'> <label for="tfa_'.$id.'">'.htmlspecialchars($name)."</label><br>\n";
		}

		global $wp_roles;
		if (!isset($wp_roles)) $wp_roles = new WP_Roles();
		
		foreach($wp_roles->role_names as $id => $name)
		{	
			$setting = $this->get_option('tfa_'.$id);
			$setting = $setting === false || $setting ? 1 : 0;
			
			print '<input type="checkbox" id="tfa_'.$id.'" name="tfa_'.$id.'" value="1" '.($setting ? 'checked="checked"' :'').'> <label for="tfa_'.$id.'">'.htmlspecialchars($name)."</label><br>\n";
		}
		
	}

	public function tfaListDefaultHMACRadios()
	{
		$tfa = $this->getTFA();
		$setting = $this->get_option('tfa_default_hmac');
		$setting = $setting === false || !$setting ? $tfa->default_hmac : $setting;
		
		$types = array('totp' => __('TOTP (time based - most common algorithm; used by Google Authenticator)', 'two-factor-authentication'), 'hotp' => __('HOTP (event based)', 'two-factor-authentication'));
		
		foreach($types as $id => $name)
			print '<input type="radio" id="tfa_default_hmac_'.esc_attr($id).'" name="tfa_default_hmac" value="'.$id.'" '.($setting == $id ? 'checked="checked"' :'').'> '.'<label for="tfa_default_hmac_'.esc_attr($id).'">'."$name</label><br>\n";
	}

	public function tfaListXMLRPCStatusRadios()
	{
		$tfa = $this->getTFA();
		$setting = $this->get_option('tfa_xmlrpc_on');
		$setting = $setting === false || !$setting ? 0 : 1;
		
		$types = array(
			'0' => __('Do not require 2FA over XMLRPC (best option if you must use XMLRPC and your client does not support 2FA)', 'two-factor-authentication'),
			'1' => __('Do require 2FA over XMLRPC (best option if you do not use XMLRPC or are unsure)', 'two-factor-authentication')
		);
		
		foreach($types as $id => $name)
			print '<input type="radio" name="tfa_xmlrpc_on" id="tfa_xmlrpc_on_'.$id.'" value="'.$id.'" '.($setting == $id ? 'checked="checked"' :'').'> <label for="tfa_xmlrpc_on_'.$id.'">'.$name."</label><br>\n";
	}

	public function tfaShowAdminSettingsPage()
	{
		$tfa = $this->getTFA();
		require_once(SIMBA_TFA_PLUGIN_DIR.'/includes/admin_settings.php');
	}

	public function tfaShowUserSettingsPage()
	{
		$tfa = $this->getTFA();
		include SIMBA_TFA_PLUGIN_DIR.'/includes/user_settings.php';
	}

	public function admin_menu() 
	{
		$tfa = $this->getTFA();
		
		$tfa->potentially_port_private_keys();
		
		global $current_user;
		if(!$tfa->isActivatedForUser($current_user->ID)) return;
		add_menu_page(__('Two Factor Authentication', 'two-factor-authentication'), __('Two Factor Auth', 'two-factor-authentication'), 'read', 'two-factor-auth-user', array($this, 'tfaShowUserSettingsPage'), SIMBA_TFA_PLUGIN_URL.'/img/tfa_admin_icon_16x16.png', 72);
	}

	public function menu_entry_for_admin() {

		// On multisite, only show the entry on site ID 1 - to ensure options get saved in the right place.
		global $current_site, $wpdb;
		// $current_site is not the right way to do this - it is internal, and could be anything
		if (is_multisite() && (!is_super_admin() || !is_object($wpdb) || !isset($wpdb->blogid) || 1 != $wpdb->blogid)) return;

		add_action( 'admin_init', array($this, 'tfaRegisterTwoFactorAuthSettings' ));

		add_options_page(
			__('Two Factor Authentication', 'two-factor-authentication'),
			__('Two Factor Authentication', 'two-factor-authentication'),
			'manage_options',
			'two-factor-auth',
			array($this, 'tfaShowAdminSettingsPage')
		);
	}

	public function addPluginSettingsLink($links)
	{
		if (!is_network_admin()) {
			$link = '<a href="options-general.php?page=two-factor-auth">'.__('Plugin settings', 'two-factor-authentication').'</a>';
			array_unshift($links, $link);
		} else {
			switch_to_blog(1);
			$link = '<a href="'.admin_url('options-general.php').'?page=two-factor-auth">'.__('Plugin settings', 'two-factor-authentication').'</a>';
			restore_current_blog();
			array_unshift($links, $link);
		}

		$link2 = '<a href="admin.php?page=two-factor-auth-user">'.__('User settings', 'two-factor-authentication').'</a>';
		array_unshift($links, $link2);

		return $links;
	}

	public function check_possible_reset() {
		if(!empty($_GET['simbatfa_priv_key_reset']) && !empty($_REQUEST['nonce']) && wp_verify_nonce($_REQUEST['nonce'], 'simbatfa_reset_private_key'))
		{
			$this->reset_private_key_and_emergency_codes();
// 			if (empty($_REQUEST['noredirect'])) exit;
			exit;
		}
		
	}

	public function reset_private_key_and_emergency_codes($user_id = false, $redirect = null) {
	
		if (!$user_id) {
			global $current_user;
			$user_id = $current_user->ID;
		}
		
		delete_user_meta($user_id, 'tfa_priv_key_64');
		delete_user_meta($user_id, 'simba_tfa_emergency_codes_64');
		
		if (false === $redirect) return;
		
		if (empty($_REQUEST['noredirect'])) {
			wp_safe_redirect( admin_url('admin.php').'?page=two-factor-auth-user&settings-updated=1');
		} else {
			$url = ( is_ssl() ? 'https://' : 'http://' ) . $_SERVER['HTTP_HOST'] . remove_query_arg(array('simbatfa_priv_key_reset', 'noredirect', 'nonce'));

			wp_redirect(esc_url_raw($url));
		}
	}

	public function reset_link($admin = true) {

		$url_base = $admin ? admin_url('admin.php').'?page=two-factor-auth-user&settings-updated=1' : (( is_ssl() ? 'https://' : 'http://' ) . $_SERVER['HTTP_HOST']);

		$add_query_args = array(
			'simbatfa_priv_key_reset' => 1,
		);
		if (!$admin) $add_query_args['noredirect'] = 1;

		$url = $url_base.add_query_arg($add_query_args);

		$url = wp_nonce_url($url, 'simbatfa_reset_private_key', 'nonce');

		return '<a href="javascript:if(confirm(\''.__('Warning: if you reset this key you will have to update your apps with the new one. Are you sure you want this?', 'two-factor-authentication').'\')) { window.location = \''.esc_js($url).'\'; }">'.__('Reset private key', 'two-factor-authentication').'</a>';

	}

	public function footer() {
		$ajax_url = admin_url('admin-ajax.php');
		// It's possible that FORCE_ADMIN_SSL will make that SSL, whilst the user is on the front-end having logged in over non-SSL - and as a result, their login cookies won't get sent, and they're not registered as logged in.
		if (!is_admin() && substr(strtolower($ajax_url), 0, 6) == 'https:' && !is_ssl()) {
			$also_try = 'http:'.substr($ajax_url, 6);
		}
		?>
		<script>
			jQuery(document).ready(function($) {
				$('.simbaotp_qr_container').qrcode({
					"render": "image",
					"text": $('.simbaotp_qr_container:first').data('qrcode'),
				});
				$('.simbaotp_refresh').click(function(e) {
					e.preventDefault();
					$(".simba_current_otp").html('<em><?php echo esc_attr(__('Updating...', 'two-factor-authentication'));?></em>');
					$.post('<?php echo esc_js($ajax_url);?>', {
						action: "simbatfa_shared_ajax",
						subaction: "refreshotp",
						nonce: "<?php echo esc_js(wp_create_nonce("tfa_shared_nonce"));?>"
					}, function(response) {
						var got_code = '';
						try {
							var resp = JSON.parse(response);
							got_code = resp.code;
						} catch(err) {
							<?php if (!isset($also_try)) { ?>
							alert("<?php echo esc_js(__('Response:', 'two-factor-authentication')); ?> "+response);
							<?php } ?>
							console.log(response);
							console.log(err);
						}
						<?php
							if (isset($also_try)) {
							?>
							$.post('<?php echo esc_js($also_try);?>', {
								action: "simbatfa_shared_ajax",
								subaction: "refreshotp",
								nonce: "<?php echo esc_js(wp_create_nonce("tfa_shared_nonce"));?>"
							}, function(response) {
								try {
									var resp = JSON.parse(response);
									if (resp.code) {
										$(".simba_current_otp").html(resp.code);
									} else {
										console.log(response);
										console.log("TFA: no code found");
									}
								} catch(err) {
									alert("<?php echo esc_js(__('Response:', 'two-factor-authentication')); ?> "+response);
									console.log(response);
									console.log(err);
								}
							});
							<?php } else { ?>
						if ('' != got_code) {
							$(".simba_current_otp").html(got_code);
						} else {
							console.log("TFA: no code found");
						}
						<?php } ?>
					});
				});
			});
		</script>
		<?php
	}

	public function print_private_keys($admin, $type = 'full', $user_id = false) {

		$tfa = $this->getTFA();
		global $current_user;

		if ($user_id == false) $user_id = $current_user->ID;

		$tfa_priv_key_64 = get_user_meta($user_id, 'tfa_priv_key_64', true);
		if(!$tfa_priv_key_64) $tfa_priv_key_64 = $tfa->addPrivateKey($user_id);

		$tfa_priv_key = trim($tfa->getPrivateKeyPlain($tfa_priv_key_64, $user_id), "\x00..\x1F");

		$tfa_priv_key_32 = Base32::encode($tfa_priv_key);

		if ('full' == $type) {
			?>
			<strong><?php echo __('Private key (base 32 - used by Google Authenticator and Authy):', 'two-factor-authentication');?></strong>
			<?php echo htmlspecialchars($tfa_priv_key_32); ?><br>

			<strong><?php echo __('Private key:', 'two-factor-authentication');?></strong>
			<?php echo htmlspecialchars($tfa_priv_key); ?><br>
			<?php
		} elseif ('plain' == $type) {
			echo htmlspecialchars($tfa_priv_key);
		} elseif ('base32' == $type) {
			echo htmlspecialchars($tfa_priv_key_32);
		} elseif ('base64' == $type) {
			echo htmlspecialchars($tfa_priv_key_64);
		}
	}

	public function current_otp_code($tfa, $user_id = false) {
		global $current_user;
		if (false == $user_id) $user_id = $current_user->ID;
		$tfa_priv_key_64 = get_user_meta($user_id, 'tfa_priv_key_64', true);
		return '<span class="simba_current_otp">'.$tfa->generateOTP($user_id, $tfa_priv_key_64).'</span>';
	}

	public function add_footer($admin) {
		static $added_footer;
		if (empty($added_footer)) {
			$added_footer = true;
// 			wp_enqueue_script('jquery');
			$script_ver = (defined('WP_DEBUG') && WP_DEBUG) ? time() : $this->version;
			$script_file = (defined('SCRIPT_DEBUG') && SCRIPT_DEBUG) ? 'jquery-qrcode.js' : 'jquery-qrcode.min.js';
			wp_enqueue_script( 'jquery-qrcode', SIMBA_TFA_PLUGIN_URL.'/includes/jquery-qrcode/'.$script_file, array('jquery'), $script_ver);
			add_action( $admin ? 'admin_footer' : 'wp_footer' , array($this, 'footer'));
		}
	}

	public function current_codes_box($admin = true, $user_id = false) {

		global $current_user;

		if (false == $user_id) $user_id = $current_user->ID;

		$tfa = $this->getTFA();

		$this->add_footer($admin);

		$url = preg_replace('/^https?:\/\//', '', site_url());
		
		$tfa_priv_key_64 = get_user_meta($user_id, 'tfa_priv_key_64', true);
		
		if (!$tfa_priv_key_64) $tfa_priv_key_64 = $tfa->addPrivateKey($user_id);

		$tfa_priv_key = trim($tfa->getPrivateKeyPlain($tfa_priv_key_64, $user_id), "\x00..\x1F");

		$tfa_priv_key_32 = Base32::encode($tfa_priv_key);

		$algorithm_type = $tfa->getUserAlgorithm($user_id);

		if ($admin) {
			if ($current_user->ID == $user_id) {
				echo '<h2>'.__('Current codes', 'two-factor-authentication').'</h2>';
			} else {
				$user = get_user_by('id', $user_id);
				$user_descrip = htmlspecialchars($user->user_nicename.' - '.$user->user_email);
				echo '<h2>'.sprintf(__('Current codes (login: %s)', 'two-factor-authentication'), $user_descrip).'</h2>';
			}
		} else {
// 			echo '<h2>'.__('Current one-time password', 'two-factor-authentication').' '.$this->reset_current_otp_link().'</h2>';
		}

		?>
		<div class="postbox">

			<?php if ($admin) { ?>
				<h3 style="padding: 10px 6px 0px; margin:4px 0 0; cursor: default;">
					<span style="cursor: default;"><?php echo __('Current one-time password', 'two-factor-authentication').' ';
					if ($current_user->ID == $user_id) { echo $this->reset_current_otp_link(); } ?>
					</span>
					<div class="inside">
						<p><strong style="font-size: 3em;"><?php echo $this->current_otp_code($tfa, $user_id); ?></strong></p>
					</div>
				</h3>
			<?php } else {
				?>
				<div class="inside">
					<p class="simbatfa-frontend-current-otp" style="font-size: 1.5em; margin-top:6px;">
					<strong>
						<?php echo __('Current one-time password', 'two-factor-authentication').' '.$this->reset_current_otp_link(); ?>
					</strong> :

					<span class="simba_current_otp"><?php print $tfa->generateOTP($user_id, $tfa_priv_key_64); ?></span>
			
					</p>
				</div>

			<?php } ?>

			<?php if ($admin) { ?>
			<h3 style="padding-left: 10px; cursor: default;">
				<span style="cursor: default;"><?php _e('QR code', 'two-factor-authentication'); ?></span>
			</h3>
			<?php } else {
				echo '<h2>'.__('QR code', 'two-factor-authentication').'</h2>';
			} ?>
			<div class="inside">
				<p>
					<?php _e('For OTP apps that support scanning, scanning this code is the quickest way to set the app up (e.g. with Duo Mobile, Google Authenticator)', 'two-factor-authentication'); ?>.
					
					<?php printf(__('You are currently using %s, %s', 'two-factor-authentication'),  strtoupper($algorithm_type), ($algorithm_type == 'totp') ? __('a time based algorithm', 'two-factor-authentication') : __('an event based algorithm', 'two-factor-authentication')); ?>
				</p>
				<p title="<?php echo sprintf(__("Private key: %s (base 32: %s)", 'two-factor-authentication'), $tfa_priv_key, $tfa_priv_key_32);?>">
					<?php $qr_url = $this->tfa_qr_code_url($algorithm_type, $url, $tfa_priv_key, $user_id) ?>
					<div class="simbaotp_qr_container" data-qrcode="<?php echo esc_attr($qr_url); ?>"></div>
				</p>
			</div>

			<div class="inside">

			<h3 class="normal" style="cursor: default"><?php _e('Private key - always to be kept secret - type this into your app to set it up (instead of scanning the code)', 'two-factor-authentication'); ?></h3>

				<p>
					<?php
						$this->print_private_keys($admin, 'full', $user_id);
						if ($current_user->ID == $user_id) {
							echo $this->reset_link($admin);
						} else {
							echo '<a id="tfa-reset-privkey-for-user" data-user_id="'.$user_id.'" href="#">'.__('Reset private key', 'two-factor-authentication').'</a>';
						}
					?>
				</p>
			</div>

			<?php
				if ($admin || apply_filters('simba_tfa_emergency_codes_user_settings', false, $user_id) !== false) {
			?>
			<div class="inside">

			<h3 class="normal" style="cursor: default"><?php _e('Emergency codes', 'two-factor-authentication'); ?></h3>

				<p>
					<?php
						$default_text = '<a href="https://www.simbahosting.co.uk/s3/product/two-factor-authentication/">'.__('One-time emergency codes are a feature of the Premium version of this plugin.', 'two-factor-authentication').'</a>';
						echo apply_filters('simba_tfa_emergency_codes_user_settings', $default_text, $user_id);
					?>
				</p>

			</div>

			<?php } ?>

		</div>
		<?php
	}

	public function reset_current_otp_link($admin = true) {
		return '<a href="#" class="simbaotp_refresh">'.__('(update)', 'two-factor-authentication').'</a>';
	}

	/**
	 * Print out the advanced settings box
	 *
	 * @param Boolean|Callable $submit_button_callback - if not a callback, then <form> tags will be added
	 */
	public function advanced_settings_box($submit_button_callback = false) {
		$tfa = $this->getTFA();

		global $current_user;
		$algorithm_type = $tfa->getUserAlgorithm($current_user->ID);

		?>
		<h2><?php _e('Advanced settings', 'two-factor-authentication'); ?></h2>

		<div id="tfa_advanced_box" class="tfa_settings_form" style="margin-top: 20px;">

			<?php if (false === $submit_button_callback) { ?>
				<form method="post" action="<?php print esc_url(add_query_arg('settings-updated', 'true', $_SERVER['REQUEST_URI'])); ?>">
				<?php wp_nonce_field('tfa_algorithm', '_tfa_algorithm_nonce', false, true); ?>
			<?php } ?>

			<?php _e('Choose which algorithm for One Time Passwords you want to use.', 'two-factor-authentication'); ?>
			<p>
			<?php
				$this->tfaListAlgorithmRadios($current_user->ID);
				if ('hotp' == $algorithm_type) {
					$counter = $tfa->getUserCounter($current_user->ID);
					print '<br>'.__('Your counter on the server is currently on', 'two-factor-authentication').': '.$counter;
				}
			?>
			
			</p>
			<?php if (false === $submit_button_callback) { submit_button(); echo '</form>'; } else { call_user_func($submit_button_callback); } ?>

		</div>
		<?php
	}

	/**
	 * Called not only upon the WP action login_enqueue_scripts, but potentially upon the action 'init' and various others from other plugins too. It can handle being called multiple times.
	 */
	public function login_enqueue_scripts() {

	if (isset($_GET['action']) && 'logout ' != $_GET['action'] && 'login' != $_GET['action']) return;

		static $already_done = false;
		
		if ($already_done) return;

		// Prevent cacheing when in debug mode
		$script_ver = (defined('WP_DEBUG') && WP_DEBUG) ? time() : $this->version;

		wp_enqueue_script('tfa-ajax-request', SIMBA_TFA_PLUGIN_URL.'/includes/tfa.js', array('jquery'), $script_ver);
		
		$localize = array(
			'ajaxurl' => admin_url('admin-ajax.php'),
			'click_to_enter_otp' => __("Click to enter One Time Password", 'two-factor-authentication'),
			'enter_username_first' => __('You have to enter a username first.', 'two-factor-authentication'),
			'otp' => __("One Time Password (i.e. 2FA)", 'two-factor-authentication'),
			'otp_login_help' => __('(check your OTP app to get this password)', 'two-factor-authentication'),
			'nonce' => wp_create_nonce("simba_tfa_loginform_nonce")
		);
		
		// Spinner exists since WC 3.8. Use the proper functions to avoid SSL warnings.
		if (file_exists(ABSPATH.'wp-admin/images/spinner-2x.gif')) {
			$localize['spinnerimg'] = admin_url('images/spinner-2x.gif');
		} elseif (file_exists(ABSPATH.WPINC.'/images/spinner-2x.gif')) {
			$localize['spinnerimg'] = includes_url('images/spinner-2x.gif');
		}
		
		wp_localize_script('tfa-ajax-request', 'simba_tfasettings', $localize);
		
		$already_done = true;
	}

	public function tfaShowHOTPOffSyncMessage() {
		global $current_user;
		$is_off_sync = get_user_meta($current_user->ID, 'tfa_hotp_off_sync', true);
		if(!$is_off_sync)
			return;
		
		?>
		<div class="error">
			<h3><?php _e('Two Factor Authentication re-sync needed', 'two-factor-authentication');?></h3>
			<p>
				<?php _e('You need to resync your device for Two Factor Authentication since the OTP you last used is many steps ahead of the server.', 'two-factor-authentication'); ?>
				<br>
				<?php _e('Please re-sync or you might not be able to log in if you generate more OTPs without logging in.', 'two-factor-authentication');?>
				<br><br>
				<a href="<?php echo wp_nonce_url('admin.php?page=two-factor-auth-user&warning_button_clicked=1', 'tfaresync', 'resyncnonce'); ?>" class="button"><?php _e('Click here and re-scan the QR-Code', 'two-factor-authentication');?></a>
			</p>
		</div>
		
		<?php
		
	}

	// QR code image
	public function tfa_qr_code_url($algorithm_type, $url, $tfa_priv_key, $user_id = false) {
		global $current_user;
		
		if ($user_id == false) {
			$user = $current_user;
		} else {
			$user = get_user_by('id', $user_id);
		}
		
		$tfa = $this->getTFA();
		
		// Old way was to get it via an image from https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl='.$encode.'"> . But of course, that's a slight privacy leak (Google could get your private key from their logs).

		$encode = 'otpauth://'.$algorithm_type.'/'.$url.':'.rawurlencode($user->user_login).'?secret='.Base32::encode($tfa_priv_key).'&issuer='.$url.'&counter='.$tfa->getUserCounter($user->ID);

		return $encode;
	}

	public function settings_intro_notices() {
		?>
		<p class="simba_tfa_personal_settings_notice simba_tfa_intro_notice">
			<?php echo __('These are your personal settings.', 'two-factor-authentication').' '.__('Nothing you change here will have any effect on other users.', 'two-factor-authentication'); ?>
		</p>
		<p class="simba_tfa_verify_tfa_notice simba_tfa_intro_notice"><strong>
			<?php _e('If you activate two-factor authentication, then verify that your two-factor application is showing the same One Time Password as shown on this page before you log out.', 'two-factor-authentication'); ?></strong> <?php if (current_user_can('manage_options')) { ?><a href="https://wordpress.org/plugins/two-factor-authentication/faq/"><?php _e('You should also bookmark the FAQs, which explain how to de-activate the plugin even if you cannot log in.', 'two-factor-authentication');?></a><?php } ?>
		</p>
		<?php
	}

	/**
	 * Run upon the WP plugins_loaded action
	 */
	public function plugins_loaded() {
		load_plugin_textdomain(
			'two-factor-authentication',
			false,
			dirname(plugin_basename(__FILE__)).'/languages/'
		);
	}

	/**
	 * Make sure that self::$frontend is the instance of TFA_Frontend, and return it
	 *
	 * @return TFA_Frontend
	 */
	public function load_frontend() {
		if (!class_exists('TFA_Frontend')) require_once(SIMBA_TFA_PLUGIN_DIR.'/includes/tfa_frontend.php');
		if (empty($this->frontend)) $this->frontend = new TFA_Frontend($this);
		return $this->frontend;
	}

	public function shortcode_when_not_logged_in() {
		return '';
	}

	// Affiliate-WP login form
	public function affwp_login_fields_before() {
		$this->before_login_form_generic();
	}
	
	public function affwp_process_login_form() {
		if (!function_exists('affiliate_wp')) return;
		$affiliate_wp = affiliate_wp();
		$login = $affiliate_wp->login;
		
		$tfa = $this->getTFA();
		$params = array(
			'log' => (string)$_POST['affwp_user_login'],
			'caller'=> $_SERVER['PHP_SELF'] ? $_SERVER['PHP_SELF'] : $_SERVER['REQUEST_URI'],
			'two_factor_code' => (string)$_POST['two_factor_code']
		);
		$code_ok = $tfa->authUserFromLogin($params);
		
		$code_ok = apply_filters('simbatfa_affwp_process_login_form_auth_result', $code_ok, $params);
		
		if (is_wp_error($code_ok)) {
			$login->add_error($code_ok->get_error_code, $code_ok->get_error_message());
		} elseif (!$code_ok) {
			$login->add_error('authentication_failed', __('Error:', 'two-factor-authentication').' '.__('The one-time password (TFA code) you entered was incorrect.', 'two-factor-authentication'));
		}
		
	}
	
	// Shared by some 3rd-party login forms
	// For historical reasons there are references to WooCommerce in this code - left for the sake of not fixing what was not broken
	private function before_login_form_generic() {
	
		static $already_included = false;
		if ($already_included) return;
		$already_included = true;
	
		$script_ver = (defined('WP_DEBUG') && WP_DEBUG) ? time() : $this->version;
		wp_enqueue_script( 'tfa-wc-ajax-request', SIMBA_TFA_PLUGIN_URL.'/includes/wooextend.js', array('jquery'), $script_ver);

		$localize = array(
			'ajaxurl' => admin_url('admin-ajax.php'),
			'click_to_enter_otp' => __("Enter One Time Password (if you have one)", 'two-factor-authentication'),
			'enter_username_first' => __('You have to enter a username first.', 'two-factor-authentication'),
			'otp' => __("One Time Password", 'two-factor-authentication'),
			'nonce' => wp_create_nonce("simba_tfa_loginform_nonce"),
			'otp_login_help' => __('(check your OTP app to get this password)', 'two-factor-authentication'),
		);
		// Spinner exists since WC 3.8. Use the proper functions to avoid SSL warnings.
		if (file_exists(ABSPATH.'wp-admin/images/spinner-2x.gif')) {
			$localize['spinnerimg'] = admin_url('images/spinner-2x.gif');
		} elseif (file_exists(ABSPATH.WPINC.'/images/spinner-2x.gif')) {
			$localize['spinnerimg'] = includes_url('images/spinner-2x.gif');
		}

		wp_localize_script( 'tfa-wc-ajax-request', 'simbatfa_wc_settings', $localize);
	}
	
	// WooCommerce login form
	public function woocommerce_before_customer_login_form() {
		$this->before_login_form_generic();
	}
	
	// Catch TML login widgets (other TML login forms already trigger)
	public function tml_display($whatever) {
		$this->login_enqueue_scripts();
		return $whatever;
	}

	/**
	 * Load CSS files.
	 *
	 * @return void
	 */
	public function load_users_css() {
		wp_enqueue_style(
			'tfa-users-css',
			SIMBA_TFA_PLUGIN_URL . '/css/users.css',
			array(),
			$this->version,
			'screen'
		);
	}

	/**
	 * Add the 2TA label to the users list table header.
	 *
	 * @since 1.3.11
	 *
	 * @param array $colums Table columns.
	 *
	 * @return array
	 */
	public function manageUsersColumnsTFA ( $columns = array() ) {

		// Add the group
		$columns['tfa-status'] = __( '2FA', 'two-factor-authentication' );

		// Return columns
		return $columns;
	}

	/**
	 * Add status into TFA column.
	 *
	 * @since 1.3.11
	 *
	 * @param  string  $value       String.
	 * @param  string  $column_name Column name.
	 * @param  integer $user_id     User ID.
	 *
	 * @return string
	 */
	public function manageUsersCustomColumnTFA ( $value = '', $column_name = '', $user_id = 0 ) {

		// Only for this column name.
		if ( 'tfa-status' === $column_name ) {

			// Get TFA info.
			$tfa = $this->getTFA();

			if( ! $tfa->isActivatedForUser( $user_id ) ) {
				$value = '&#8212;';
			}
			// Use value.
			elseif ( $tfa->isActivatedByUser( $user_id ) ) {
				$value = '<span title="' . __( 'Enabled', 'two-factor-authentication' ) . '" class="dashicons dashicons-yes"></span>';
			}
			// No group.
			else {
				$value = '<span title="' . __( 'Disabled', 'two-factor-authentication' ) . '" class="dashicons dashicons-no"></span>';
			}
		}

		// Return possibly modified value.
		return $value;
	}
}

$simba_two_factor_authentication = new Simba_Two_Factor_Authentication();
