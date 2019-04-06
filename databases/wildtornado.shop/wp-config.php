<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'jil');

/** Имя пользователя MySQL */
define('DB_USER', 'jil');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'jil');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '+8xXRVFm8q_C eX@f9@Mx;F3lNv:C8Wsl{[zI({))/W6R$~$$;O<=Z8-,/u(o((C');
define('SECURE_AUTH_KEY',  'D=__R.tC6QNh`)He@S#`qtB>C}2$%ep-k/|?9AuEh>;4b|a%<YwP-a88?ny#!aA,');
define('LOGGED_IN_KEY',    'GaO:fGE)2qp1Rc9vV#&x*~_{NHHg$Vjc2:Oj9#22:WvUHI?14s;~fdFt2t773UCY');
define('NONCE_KEY',        'hpB;nTuY{OR`rQrCTU_=s>`JD*tR4Q`3&4PebJbIWX/l<?.|dqZQxaSEfOvF@bar');
define('AUTH_SALT',        '/;Mq+}>),GO3k@:m2>d[2Cha#h?&zGse&g^;x&Cj+vsm=`@488t&<gMTT%rdy2B&');
define('SECURE_AUTH_SALT', '2YFp}>r.(r!uTc1tZk6Dg8{]=_/@m@F|jq~&/WKIfCH.66jK+4NUh94MoOi9*MHe');
define('LOGGED_IN_SALT',   'MAXBE#>J;F#h0Y:6E#yHlFBBcYM{S:>YxpR9N+^q@a+Y^<c5x>ELXkAMYujR:} X');
define('NONCE_SALT',       '4aBGoD8NM57(q+*!~`:]<2NrV#jE82kY< *Ae=SDs-[pvBAi$az,02C6;,:$MamH');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
