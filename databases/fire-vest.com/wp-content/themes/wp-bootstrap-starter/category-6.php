<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Tornado</title>
<link rel="icon" href="favicon.png"/>

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
     
    <?php if(!is_page_template( 'blank-page.php' ) && !is_page_template( 'blank-page-with-container.php' )): ?>
     
 
    <div id="content" class="site-content">
        <div class="container">
            <div class="row">
                <?php endif; ?>












<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script src="https://1693021541.rsc.cdn77.org/lands/vest/jquery.lazyload.js"></script>

<!-- bxSlider Javascript file -->
<script src="https://1693021541.rsc.cdn77.org/lands/vest/js/jquery.bxslider.js"></script>
<!-- bxSlider CSS file -->
<link href="https://1693021541.rsc.cdn77.org/lands/vest/css/jquery.bxslider.css" rel="stylesheet" />
<script type="text/javascript">
    $(document).ready(function(){
$("img.lazy").lazyload();


        $(function(){
          $('.bxslider').bxSlider({
            auto:true,autoControls:true,stopAutoOnClick:true,pager:true,
            mode: 'fade',
            captions: true,
            slideWidth: 600
          });
        });
    });
</script>

 
    <section id="primary" class="content-area  ">
        <main id="main" class="site-main" role="main">
<?php 
//query_posts('cat=2');
$order = "&orderby=date&order=ASC";
  ?>
<?php //global $query_string; // параметры базового запроса
query_posts('cat=6');
query_posts('cat=6'.'&'.$order); // базовый запрос + свои параметры

?>
        <?php

        if ( have_posts('cat=6') ) :

        

             

            /* Start the Loop */
            while ( have_posts() ) : the_post();

                /*
                 * Include the Post-Format-specific template for the content.
                 * If you want to override this in a child theme, then include a file
                 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
                 */
                get_template_part( 'template-parts/content-entry-2', get_post_format() );

            endwhile;

            the_posts_navigation();

        else :

            get_template_part( 'template-parts/content', 'none' );

        endif; ?>

        </main><!-- #main -->
    </section><!-- #primary -->

<style type="text/css">
table{
    transform: scale(1);
}
    ul{
            padding-inline-start: 0px;
    padding-left: 20px;
    padding-right: 15px;

    padding-inline-start: 0;
    padding-left: 0px;
    padding-right: 0px;
    margin-block-end: 0;
    margin-block-start: 0px;
    }
.bx-wrapper .bx-controls.bx-has-controls-auto.bx-has-pager .bx-pager {
    text-align: center;
    width: 100%;
}
    body{
        margin: 0;
        padding: 0;
font-family: sans-serif!important;
/*font-family: 'Roboto', sans-serif; */
font-size: 16px;
    }
    #content{
            min-width: 320px;
    margin: 0 auto;
    }
    .row {    margin-right: 0px;
    margin-left: 0px;

    }

    #post-76 .entry-content{
            border-bottom: 1px solid rgba(0,0,0,.1);
    }
    #post-82 .bx-viewport{
            height: 625.531px;
    }

    .container{
        padding-right: 0;
        padding-left: 0;

    }
    .aligncenter{
            width: 100%;
    }

    ul li {
    list-style: none;
    line-height: 41px;
    text-align: left;
    padding-left: 40px;
    padding-left: 46px;

    line-height: 1.4;
    font-size: 16px;
    margin: 20px auto;
 }
.featuresul  li{
   
    list-style: none;
    line-height: 1;
    text-align: left;
    padding-left: 0px;
    margin-bottom: 25px;

}

 li::before{
content: " ";
    width: 30px;
    height: 41px;
    background: url(https://1693021541.rsc.cdn77.org/lands/vest/2/vopros.png) no-repeat center;
        margin-left: -40px;
        margin-left: -36px;
        position: absolute;
        margin-top: -9px;
     
}

    .list1 li::before{
         background: url(https://1693021541.rsc.cdn77.org/lands/vest/2/vopros.png) no-repeat;
             margin-top: 14px;
    }
    .list3 li::before{
         background: url(https://1693021541.rsc.cdn77.org/lands/tornado/io.png) no-repeat;
         background-size: contain;
                margin-top: -1px;
    }
    .list2 li::before{
         background: url(https://1693021541.rsc.cdn77.org/lands/vest/2/gal.png) no-repeat;
                 margin-top: -2px;

    }
        .falma li::before{
         background: url(https://1693021541.rsc.cdn77.org/lands/tornado/checkin.png) no-repeat;
background-size: contain;
margin-top: -3px;
        }

    .biglist li:before{
         background: url(https://1693021541.rsc.cdn77.org/lands/tornado/jpg/3919-200.png) no-repeat;
         background: url(https://1693021541.rsc.cdn77.org/lands/tornado/jpg/logo.svg) no-repeat;
      background-size: contain;
    width: 34px;
   
    margin-left: -38px;
  
    margin-top: 3px;
    }
    .mazel td{
        padding: 13px;   font-weight: bold;

    }

hr{
    width: 90%;
    background: #fff;
    height: 2px;
}


.footer__p {
    text-align: center;
    font-weight: 700;    margin: 20px 0px;
}
.wp-caption.alignleft {
    margin: 0px;
}
.footer2 {
    background: #333;
    padding: 20px 0px;
        width: 100%;
    margin: 0 auto;
    padding: 20px;
}

.footer2 a {
    color: #919b9a;
    text-decoration: none;
    margin-bottom: 10px;
    display: inline-block;
    font-size: 13px;
        margin: 0 9px;
}
.copyright{
    color:  #919b9a;
font-size: 13px;
}

.sizes {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 100%;
}
.size {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: center;
}
.offer-product{
      overflow: hidden;
          transform: scale(1);
}

.selected{
        background: #d9f6ff;
    border-color: #0071a8;    transform: scale(1.03);
}

input[type=checkbox] {
    position: relative;
    outline: none;
    position: relative;
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border: 2px solid #ced8dd;
    background: #f2f9fd;
    position: relative;
    margin-top: -16px;
    pointer-events: none;
    display: block;
    margin: 0 auto;
}


.selected input[type=checkbox]:before {
    content: '';
    width: 20px;
    height: 20px;
    background: url(https://1693021541.rsc.cdn77.org/lands/vest/uploads/2018/11/checkmark.png) center center / 18px 18px no-repeat;
    position: absolute;
}

.btn {
         background-color: #f48013;
    color: #ffffff;
    text-align: center;
    width: calc(100% - 10px);
    margin: 0 auto;
    max-width: 70%;
    padding: 15px;
    font-weight: bold;
    font-size: 20px;
    border-radius: 5px;
    background-image: -webkit-linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.1) 50%,rgba(0,0,0,.1));
    background-image: -o-linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.1) 50%,rgba(0,0,0,.1));
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.1) 50%,rgba(0,0,0,.1));
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#1a000000', GradientType=0);
    transition: 1s;
    cursor: pointer;
   
}


#content.site-content {
    padding-bottom: 0px;
    padding-top: 0px;
}

.page-content, .entry-content, .entry-summary {
    margin: 0 0;
}

.post.hentry {
    margin-bottom: 0px;
}

.wp-caption{
        background: none;
    border: 0px;
}
.wp-caption img[class*="wp-image-"]{
        vertical-align: super;
}
.wp-caption .wp-caption-text {
    font-size: 16px;
    padding: 0;
}

.bx-wrapper {
    box-shadow: none;

    }
    td{
        border:0px;

    }
    table{
           
    
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 5px;
    background: white;
    transition: .3s;
        border-collapse: initial!important;
        margin-bottom: 4px;
     
}
  .offer-product img{
    margin: 0 auto;
    display: block; 
  }

  .offer-product p {
    margin-bottom: 0px;
        font-size: 14px;
    padding-left: 16px;
}

input[type="checkbox"], input[type="radio"]{
        margin: 0 auto;
}

#post-16 .bx-pager-item:first-child a{
        background: url(https://1693021541.rsc.cdn77.org/lands/vest/uploads/2018/11/4.png);
    width: 65px;
    height: 40px;
    background-size: contain;
}
#post-16 .bx-pager-item:nth-child(2) a{
        background: url(https://1693021541.rsc.cdn77.org/lands/vest/uploads/2018/11/3.png);
    width: 65px;
    height: 40px;
    background-size: contain;
}
#post-16 .bx-pager-item:nth-child(3) a{
        background: url(https://1693021541.rsc.cdn77.org/lands/vest/uploads/2018/11/2.png);
    width: 65px;
    height: 40px;
    background-size: contain;
}
#post-16 .bx-pager-item:last-child a{
        background: url(https://1693021541.rsc.cdn77.org/lands/vest/uploads/2018/11/1.png);
    width: 65px;
    height: 40px;
    background-size: contain;
}
#post-16 .bx-viewport{
    height: 227.984px!important;
}
.footer{
        width: 100%;
}
</style>

 


<script type="text/javascript">
    $(".buttonf").click(function(event) {
        var data =[
        {
  "order": {
    "line_items": [
      {
        "variant_id": 13662625202266,
        "quantity": 1
      }
    ]
  }
}
]; // пoдгoтaвливaeм дaнныe
            $.ajax({ // инициaлизируeм ajax зaпрoс
               type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
               url: 'https://test-dani-aar.myshopify.com/admin/orders.json', // путь дo oбрaбoтчикa, у нaс oн лeжит в тoй жe пaпкe
               dataType: 'jsonp', // oтвeт ждeм в json фoрмaтe
               data: data, // дaнныe для oтпрaвки
               beforeSend: function(data) { // сoбытиe дo oтпрaвки
                 
                  },
               success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
                    if (data['error']) { // eсли oбрaбoтчик вeрнул oшибку
                        alert(data['error']); // пoкaжeм eё тeкст
                    } else { // eсли всe прoшлo oк
                        alert('Письмo oтврaвлeнo! Чeкaйтe пoчту! =)'); // пишeм чтo всe oк
                    }
                 },
               error: function (xhr, ajaxOptions, thrownError) { // в случae нeудaчнoгo зaвeршeния зaпрoсa к сeрвeру
                    alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
                    alert(thrownError); // и тeкст oшибки
                 },
               complete: function(data) { // сoбытиe пoслe любoгo исхoдa
                // объект в json
                function abla() {
                    
var json = JSON.stringify(data);


// json в объект
var obj = JSON.parse(json);



console.log(obj);

                }

                setTimeout(abla,3000);
                 }
                          
                 });
    });

</script>


<div class="footer">
            
            <div class="pay-icons">
                <img  class=lazy src="https://1693021541.rsc.cdn77.org/lands/vest/opt/pay-ics.jpg" data-original="https://1693021541.rsc.cdn77.org/lands/vest/uploads/2018/11/pay-ics.png" alt="" style="margin:0 auto;display: block;" >
            </div>
            <div class="footer__p">30 Day Money back Guarantee!</div>
        </div>



        <div class="footer2">
         
          
                    
                    <a href="#" class=" open-modal" data-modal="#modal1"><span>Support</span></a> 
                    <a href="#" class=" open-modal" data-modal="#modal2"><span>Returns</span></a>
                    <a href="#" class=" open-modal" data-modal="#modal3"><span>Privacy</span></a>
                    <a href="#" class=" open-modal" data-modal="#modal4"><span>Terms</span></a>
                    <a href="#" class=" open-modal" data-modal="#modal5"><span>Shipping</span></a>


          <br>
            <div class="copyright">Copyright © 2018. All Rights Reserved.</div>                                                                    
        </div>




<div class='modal' id='modal1'>
    <div class='content'>
       <div class="wpb_wrapper">
<h2 style="color: #52c8f6; font-size: 2em;">Have a question about Electric Heated Vest?</h2>
<ul>
<li>Questions About Your Order</li>
<li>Product Questions</li>
<li>Technical Support</li>
<li>Returns</li>
<li>Anything else product or order related</li>
<li>Email list subscriptions</li>
</ul>
<h3>Please contact us at:</h3>
<ul>
<li>support@goodsvil.com</li>

</ul>

</div>
    </div>  
</div> 

<div class='modal' id='easysteps'>
    <div class='content'>
        <div id="easy-steps" class="vc_row wpb_row vc_inner vc_row-fluid"><div class="easy-steps-wrapper wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner "><div class="wpb_wrapper">
<div class="wpb_text_column wpb_content_element  step" id="step-1">
<div class="wpb_wrapper">
 
<p id="step-1-header" style="font-weight: normal;"><strong>Place Electric Heated Vest On Dash</strong></p>
<p id="step-1-text" style="font-weight: normal;">Take Electric Heated Vest out of box, place on your dash – done in seconds!</p>
</div>
</div>
<div class="wpb_text_column wpb_content_element  step" id="step-2">
<div class="wpb_wrapper">
 
<p id="step-2-header" style="font-weight: normal;"><strong>Select Feature</strong></p>
<p id="step-2-text" style="font-weight: normal;">Select your navigation feature, then place your phone on Electric Heated Vest.</p>
</div>
</div>
<div class="wpb_text_column wpb_content_element  step" id="step-3">
<div class="wpb_wrapper">
 
<p id="step-3-header" style="font-weight: normal;"><strong>Drive Safer Than Ever!</strong></p>
<p id="step-3-text" style="font-weight: normal;">Conveniently drive and navigate while viewing the road ahead!</p>
</div>
</div>
</div></div></div></div>
    </div>  
</div>

<div class='modal' id='faqpop'>
    <div class='content'>
        <div class="wpb_column vc_column_container vc_col-sm-12">
                                                <div class="vc_column-inner ">
                                                    <div class="wpb_wrapper">
                                                        <div id="faq" class="vc_row wpb_row vc_inner vc_row-fluid">
                                                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                                                <div class="vc_column-inner ">
                                                                    <div class="wpb_wrapper">
                                                                        <div class="wpb_text_column wpb_content_element  faq-wrapper" id="faq-wrapper">
                                                                            <div class="wpb_wrapper">
                                                                                <h2 style="text-align: left;">Frequently Asked Questions</h2>
                                                                                <div class="faq"><h4 class="question">Will Electric Heated Vest fit any size smartphone?</h4>
                                                                                    <div class="answer" style="display: none;">
                                                                                        <p>Yes. Anyone can use Electric Heated Vest. It was designed to fit every size and type of smartphone. Whether you have a smaller iPhone 5 or the larger Samsung Galaxy S8, Electric Heated Vest will fit those phones and everything in between.</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="faq"><h4 class="question">How does Electric Heated Vest attach to the dashboard?</h4>
                                                                                    <div class="answer" style="display: none;">
                                                                                        <p><span style="font-weight: 400;">Each Electric Heated Vest comes with a universal stand that attaches to ANY dashboard to ensure you get the best possible view of your navigation display and the road ahead. Simply stick Electric Heated Vest to your dashboard, set your phone down on Electric Heated Vest and you’re good to go.</span></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="faq"><h4 class="question">How does Electric Heated Vest’s screen perform in daylight and at night time?</h4>
                                                                                    <div class="answer" style="display: none;">
                                                                                        <p><span style="font-weight: 400;">Electric Heated Vest works great during the bright afternoon sunlight. The specially treated glass in Electric Heated Vest helps ensure a strong reflective quality during bright daylight without obstructing your view.</span><br>
                                                                                            <span style="font-weight: 400;">And Electric Heated Vest works even better at night. Unlike those built-in bright LED displays that make you adjust your eyes from blinding light to dark road (which is very dangerous), with Electric Heated Vest you can easily and clearly see your navigation and the road WITHOUT straining your eyes.</span></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="faq"><h4 class="question">What apps can I use with Electric Heated Vest?</h4>
                                                                                    <div class="answer" style="display: none;">
                                                                                        <p><span style="font-weight: 400;">There are numerous apps you can use with Electric Heated Vest - HUD Widgets, Navigation, Speedometer, Navmii, Sygic, and more.</span><br>
                                                                                             </p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="faq"><h4 class="question">Will Electric Heated Vest work in my car?</h4>
                                                                                    <div class="answer" style="display: none;">
                                                                                        <p><span style="font-weight: 400;">Yes, Electric Heated Vest is universal. No matter the type of car, shape of dashboard, year, make, or model, Electric Heated Vest is designed to fit ALL vehicles.</span></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="faq"><h4 class="question">How fast can I set up Electric Heated Vest in my car?</h4>
                                                                                    <div class="answer" style="display: none;">
                                                                                        <p><span style="font-weight: 400;">Super fast! Setting up Electric Heated Vest takes just seconds! It works right out of the box with NO installation necessary. Simply stick Electric Heated Vest to the spot on your dash that works best for you and you’re ready. You’re now ready to drive safer and look cool while driving too – all in a matter of seconds!</span></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="faq"><h4 class="question">Is the Electric Heated Vest screen scratch and smudge-resistant?</h4>
                                                                                    <div class="answer" style="display: none;">
                                                                                        <p><span style="font-weight: 400;"> Yes! Electric Heated Vest is durable! It’s special treated glass is both scratch and fingerprint-resistant. Ensuring a spot-free view every time you use it.</span></p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="faq"><h4 class="question">Does Electric Heated Vest come individually packaged when I order more than one?</h4>
                                                                                    <div class="answer" style="display: none;">
                                                                                        <p>Yes. Each Electric Heated Vest you order comes individually packaged, making it extra convenient to buy as a fun but practical gift for friends and family – anyone who drives!</p>
                                                                                    </div>
                                                                                </div>
                                                                                 
                                                                            </div>
                                                                        </div>
                                                                        <div class="wpb_raw_code wpb_raw_js hidden" style="display: none;">
                                                                            <div class="wpb_wrapper">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
    </div>  
</div> 











<div class='modal' id='modal2'>
    <div class='content'>
         <div class="grid">
  <div class="grid__item large--five-sixths push--large--one-twelfth">

    <header class="section-header text-center">
      <h1>Refund &amp; Exchange</h1>
      <hr class="hr--small">
    </header>

    <div class="grid">
      <div class="grid__item large--four-fifths push--large--one-tenth">
        <div class="rte rte--nomargin rte--indented-images">
          <div style="text-align: left;">
<strong>Returns<br><br></strong>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.<strong><br></strong>
</div>
<br>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.<br><br>Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.<br><br><strong>Additional non-returnable items:<br></strong><br>Gift cards<br>Downloadable software products<br>Some health and personal care items<br><br>To complete your return, we require a receipt or proof of purchase.<br><br>Please do not send your purchase back to the manufacturer.<br><br>There are certain situations where only partial refunds are granted (if applicable)<br>Book with obvious signs of use<br>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened<br>Any item not in its original condition, is damaged or missing parts for reasons not due to our error<br>Any item that is returned more than 30 days after delivery<br><br><strong>Refunds (if applicable)<br></strong><br>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.<br>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.<br><br><strong>Late or missing refunds (if applicable)<br></strong><br>If you haven’t received a refund yet, first check your bank account again.<br>Then contact your credit card company, it may take some time before your refund is officially posted.<br>Next contact your bank. There is often some processing time before a refund is posted.<br>If you’ve done all of this and you still have not received your refund yet, please contact us at support@goodsvil.com.<br><br><strong>Sale items (if applicable)<br></strong><br>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.<br><br><strong>Exchanges (if applicable)<br></strong><br>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at support@goodsvil.com <br><br><strong>Gifts<br></strong><br>If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.<br><br>If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.<br><br><strong>Shipping<br></strong><br>To return your product, send us an email support@goodsvil.com<br><br>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.<br><br>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.<br><br>If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.<br><br>
        </div>
      </div>
    </div>

  </div>
</div>
    </div>  
</div> 
<div class='modal' id='modal3'>
    <div class='content'>
        <main class="main-content" role="main">
      
        <div class="wrappers">
      
        <!-- /templates/page.liquid -->
<div class="grid">
  <div class="grid__item large--five-sixths push--large--one-twelfth">

    <header class="section-header text-center">
      <h1>Privacy Policy</h1>
      <hr class="hr--small">
    </header>

    <div class="grid">
      <div class="grid__item large--four-fifths push--large--one-tenth">
        <div class="rte rte--nomargin rte--indented-images">
          <div style="text-align: left;">
<p class="p1"><span class="s1">Goodsvil  Privacy Policy</span></p>

 
<p class="p1"><span class="s1">This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from Goodsvil Store http://goodsvil.com  (the “Site”, “we”, “us”, “our”, or “Goodsvil”).</span></p>
 


 <p class="p1"><span class="s1"><span style="">When you use our services, you’re trusting us with your personal data. We understand this is a big responsibility, so we work hard to protect your personal data and put you in control. This Privacy Policy will help you understand what information we collect, why we collect it, and how you can manage your information.</span></span></p>
 
<p class="p1"><span class="s1"><span style="">If you are a resident of the European Union (“EU”), the European Economic Area (“EEA”), or Switzerland, processing of your personal data will always be in line with the General Data Protection Regulation (GDPR).</span></span></p>
 
<p class="p1"><span class="s1"><span style="">Goodsvil is the Controller of this website, as defined in the GDPR. All personal data collected by Goodsvil is stored exclusively in secure hosting facilities in the US. Goodsvil has data processing agreements in place with our hosting facilities, ensuring compliance with GDPR. Please see our Terms of Service for details. All hosting is performed in accordance with the highest security regulations.</span></span></p>
 
<p class="p1"><span class="s1"><span style="">In the case of a personal data breach, we shall notify the effected parties not later than 72 hours after having become aware of it, where feasible and without undue delay, unless the personal data breach is unlikely to result in a risk to the rights and freedoms of natural persons. If the notification to the effected parties is not made within 72 hours, it shall be accompanied by the reasons for the delay when the notification is made.</span></span></p>
 
<p class="p1"><span class="s1"><span style="">If you are located in the US, Goodsvil processes your data solely in data centers located in the US. Goodsvil has adopted reasonable physical, technical and organizational safeguards which substantially mirror the EU safeguards against accidental, unauthorized or unlawful destruction, loss, alteration, disclosure, access, use or processing of your data in Goodsvil’s possession. Goodsvil will promptly notify you in the event of any known unauthorized access to, or use of, your data.
</span></span></p>

 
<p class="p1"><span class="s1">PERSONAL INFORMATION WE COLLECT</span></p>
 
<p class="p1"><span class="s1">Depending upon your use of Our Site, we may collect some or all of the following personal data</span></p>
 
<p class="p1"><span class="s1">name;</span></p>
<p class="p1"><span class="s1">delivery address;</span></p>
<p class="p1"><span class="s1">credit card or debit card details;</span></p>
<p class="p1"><span class="s1">contact information such as email addresses and telephone numbers;</span></p>
<p class="p1"><span class="s1">information about your PC and visits to this website such as your IP address, geographical location, web browser type and version, referral source, length of visit and number of pages viewed;</span></p>
<p class="p1"><span class="s1">a list of URLs starting with a referring site, your activity on Our Site, and the site you exit to;</span></p>


<p class="p1"><span class="s1">This list is not exhaustive and, in specific instances, we may need to collect additional data for the purposes set out in this Policy. Some of the above personal data is collected directly, for example when you set up an on-line account on our websites, or send an email to our customer services team. Other personal data is collected indirectly, for example, your browsing or shopping activity.</span></p>



<p class="p1"><span class="s1">When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”</span></p>

<p class="p1"><span class="s1">We collect Device Information using the following technologies:</span></p>

<p class="p1"><span class="s1"><span class="Apple-converted-space">&nbsp; &nbsp; </span>- “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">&nbsp; &nbsp; </span>- “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">&nbsp; &nbsp; </span>- “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.</span></p>


<p class="p1"><span class="s1">Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number.<span class="Apple-converted-space">&nbsp; </span>We refer to this information as “Order Information.”</span></p>

<p class="p1"><span class="s1">By using Our Site you may also receive certain third party Cookies on your computer or device. Third party Cookies are those placed by websites, services, and/or parties other than Us. Third party Cookies are used on Our Site for marketing and performance purposes. These Cookies are not integral to the functioning of Our Site and your use and experience of Our Site will not be impaired by refusing consent to them.</span></p>



<p class="p1"><span class="s1">We may also gather personal data from third party sources, such as specialist data companies and online media channels.</span></p>

<p class="p1"><span class="s1">When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</span></p>

<p class="p1"><span class="s1">HOW DO WE USE YOUR PERSONAL INFORMATION?</span></p>

<p class="p1"><span class="s1">We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).<span class="Apple-converted-space">&nbsp; </span>Additionally, we use this Order Information to:</span></p>
<p class="p1"><span class="s1"><br> Communicate with you;</span></p>
<p class="p1"><span class="s1">Screen our orders for potential risk or fraud; and</span></p>
<p class="p1"><span class="s1">When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</span></p>

<p class="p1"><span class="s1">We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</span></p>

<p class="p1"><span class="s1">In addition, your data may be used in relation to advertising activities via online media channels and web banner advertisements. You may see personalised advertisements, such as web banner advertisements, whilst browsing other websites. These advertisements will relate to products you have viewed whilst browsing our websites on your computer or other devices.</span></p>

<p class="p1"><span class="s1">These advertisements are provided by Next Deal Shop via market leading specialist providers using ‘cookies’ laces on your computer or other devices. You can remove or disable cookies at any time – see section ‘Disabling Cookies’ for further information.</span></p>

<p class="p1"><span class="s1">SHARING YOUR PERSONAL INFORMATION</span></p>

<p class="p1"><span class="s1">We share your Personal Information with third parties to help us use your Personal Information, as described above.<span class="Apple-converted-space">&nbsp; </span>For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here:<span class="Apple-converted-space">&nbsp; </span>https://www.shopify.com/legal/privacy.<span class="Apple-converted-space">&nbsp; </span>We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here:<span class="Apple-converted-space">&nbsp; </span>https://www.google.com/intl/en/policies/privacy/.<span class="Apple-converted-space">&nbsp; </span>You can also opt-out of Google Analytics here:<span class="Apple-converted-space">&nbsp; </span>https://tools.google.com/dlpage/gaoptout.</span></p>

<p class="p1"><span class="s1">Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</span></p>

<p class="p1"><span class="s1">BEHAVIOURAL ADVERTISING</span></p>
<p class="p1"><span class="s1">As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.<span class="Apple-converted-space">&nbsp; </span>For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.</span></p>

<p class="p1"><span class="s1">You can opt out of targeted advertising by:</span></p>

<p class="p1"><span class="s1"><span class="Apple-converted-space">&nbsp; &nbsp; </span>FACEBOOK - https://www.facebook.com/settings/?tab=ads</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">&nbsp; &nbsp; </span>GOOGLE - https://www.google.com/settings/ads/anonymous</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">&nbsp; &nbsp; </span>BING - https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</span></p>

<p class="p1"><span class="s1">Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at:<span class="Apple-converted-space">&nbsp; </span>http://optout.aboutads.info/.</span></p>

<p class="p1"><span class="s1">DO NOT TRACK</span></p>
<p class="p1"><span class="s1">Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.</span></p>

<p class="p1"><span class="s1">Your Rights under the GDPR</span></p>
<p class="p1"><span class="s1">


Here is a list of the rights that all residents of the European Economic Area have under the GDPR. They don’t apply in all circumstances - if you wish to use any of them, we’ll explain at that time if they are engaged or not.
</span></p>
 <ul>


 <li>

       The right to be informed about the processing of your personal information;
</li><li>
 

      The right to have your personal information corrected if it is inaccurate and to have incomplete personal information completed;

 </li><li>

 

        The right to object to processing of your personal information;

 </li><li>

 

        The right to restrict processing of your personal information;

 </li><li>

        The right to have your personal information erased (the “right to be forgotten”);
</li><li>

        The right to request access to your personal information and to obtain information about how we process it;
</li><li>
 

        The right to move, copy or transfer your personal information (“data portability”);
</li><li>
 

        Rights in relation to automated decision making which has a legal effect or otherwise significantly affects you.
</li></ul>
</span></p>


<p class="p2">Please email us if you would like your personal data deleted.
</p>

<p class="p2">
You can also contact our Data Protection Officer by sending us an email with a subject line of “DPO Contact Request”.</p>




<p class="p1"><span class="s1">Disabling Cookies</span></p>

<p class="p1"><span class="s1">If you want to disable cookies you need to change your website browser settings to reject cookies. How you can do this will depend on the browser you use. Further details on how to disable cookies for the most popular browsers are set out below: -</span></p>



<p class="p1"><span class="s1">For Microsoft Internet Explorer:</span></p>

<p class="p1"><span class="s1">Choose the menu “tools” then “Internet Options”</span></p>
<p class="p1"><span class="s1">Click on the “privacy” tab</span></p>
<p class="p1"><span class="s1">Select the setting the appropriate setting</span></p>


<p class="p1"><span class="s1">For Google Chrome:</span></p>

<p class="p1"><span class="s1">Choose Settings&gt; Advanced</span></p>
<p class="p1"><span class="s1">Under "Privacy and security," click “Content settings”.</span></p>
<p class="p1"><span class="s1">Click “Cookies”</span></p>


<p class="p1"><span class="s1">For Safari:</span></p>

<p class="p1"><span class="s1">Choose Preferences &gt; Privacy</span></p>
<p class="p1"><span class="s1">Click on “Remove all Website Data”</span></p>


<p class="p1"><span class="s1">For Mozilla firefox:</span></p>

<p class="p1"><span class="s1">Choose the menu “tools” then “Options”</span></p>
<p class="p1"><span class="s1">Click on the icon “privacy”</span></p>
<p class="p1"><span class="s1">Find the menu “cookie” and select the relevant options</span></p>


<p class="p1"><span class="s1">For Opera 6.0 and further:</span></p>

<p class="p1"><span class="s1">Choose the menu Files”&gt; “Preferences”</span></p>
<p class="p1"><span class="s1">Privacy</span></p>


<p class="p1"><span class="s1">If you only disable third party cookies, you will not be prevented from making purchases on our site. If you disable all cookies, you will be unable to complete a purchase on our site.</span></p>


<p class="p1"><span class="s1">DATA RETENTION</span></p>
<p class="p1"><span class="s1">When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</span></p>

<p class="p1"><span class="s1">CHANGES</span></p>
<p class="p1"><span class="s1">We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</span></p>


<p class="p1"><span class="s1">MINORS</span></p>
<p class="p1"><span class="s1">The Site is not intended for individuals under the age of 16.</span></p>

<p class="p1"><span class="s1">CONTACT US</span></p>
<p class="p1"><span class="s1">For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:support@goodsvil.com" class="text-link"><span class="s2">support@goodsvil.com</span></a>.</span></p>

<p class="p1"><span class="s1">Last Update: 10th October, 2018</span></p>
</div>
        </div>
      </div>
    </div>

  </div>
</div>

<limespot></limespot>
      
        <div style="clear:both"></div></div>
      
    </main>
    </div>  
</div> 
<div class='modal' id='modal4'>
    <div class='content'>
        <div class="grid">
  <div class="grid__item large--five-sixths push--large--one-twelfth">

    <header class="section-header text-center">
      <h1>Terms &amp; Conditions</h1>
      <hr class="hr--small">
    </header>

    <div class="grid">
      <div class="grid__item large--four-fifths push--large--one-tenth">
        <div class="rte rte--nomargin rte--indented-images">
          <p><strong>OVERVIEW</strong><br><br>This website is operated by Goodsvil. Throughout the site, the terms “we”, “us” and “our” refer to Goodsvil. Goodsvil offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.<br><br>By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.<br><br>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.<br><br>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.<br><br>Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.<br><br><strong>SECTION 1 - ONLINE STORE TERMS</strong><br><br>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.<br>You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).<br>You must not transmit any worms or viruses or any code of a destructive nature.<br>A breach or violation of any of the Terms will result in an immediate termination of your Services.<br><br><strong>SECTION 2 - GENERAL CONDITIONS</strong><br><br>We reserve the right to refuse service to anyone for any reason at any time.<br>You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.<br>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.<br>The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.<br><br><strong>SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</strong><br><br>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.<br>This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.<br><br><strong>SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</strong><br><br>Prices for our products are subject to change without notice.<br>We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.<br>We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.<br><br><strong>SECTION 5 - PRODUCTS OR SERVICES (if applicable)</strong><br><br>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.<br>We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.<br>We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.<br>We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.<br><br><strong>SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</strong><br><br>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.<br><br>You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.<br><br>For more detail, please review our Returns Policy.<br><br><strong>SECTION 7 - OPTIONAL TOOLS</strong><br><br>We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.<br>You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.<br>Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).<br>We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.<br><br><strong>SECTION 8 - THIRD-PARTY LINKS</strong><br><br>Certain content, products and services available via our Service may include materials from third-parties.<br>Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.<br>We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.<br><br><strong>SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</strong><br><br>If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.<br>We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.<br>You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.<br><br><strong>SECTION 10 - PERSONAL INFORMATION</strong><br><br>Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy.<br><br><strong>SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</strong><br><br>Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).<br>We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.<br><br><strong>SECTION 12 - PROHIBITED USES</strong><br><br>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.<br><br><strong>SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</strong><br><br>We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.<br>We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.<br>You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.<br>You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.<br>In no case shall Goodsvil, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.<br><br><strong>SECTION 14 - INDEMNIFICATION</strong><br><br>You agree to indemnify, defend and hold harmless Goodsvil and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.<br><br><strong>SECTION 15 - SEVERABILITY</strong><br><br>In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.<br><br><strong>SECTION 16 - TERMINATION</strong><br><br>The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.<br>These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.<br>If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).<br><br><strong>SECTION 17 - ENTIRE AGREEMENT</strong><br><br>The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.<br>These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).<br>Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.<br><br><strong>SECTION 18 - GOVERNING LAW</strong><br><br>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Israel<br><br><strong>SECTION 19 - CHANGES TO TERMS OF SERVICE</strong><br><br>You can review the most current version of the Terms of Service at any time at this page.<br>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.<br><br><strong>SECTION 20 - CONTACT INFORMATION</strong><br><br>Questions about the Terms of Service should be sent to us at support@goodsvil.com.<br><br><br></p>
        </div>
      </div>
    </div>

  </div>
</div>
    </div>  
</div>  

<div class='modal' id='modal5'>
    <div class='content'>
      <strong> Shipping and Delivery</strong>
<br>
<br>
The time for order delivery is divided into two parts:
<br><br>
* Processing time: Order verification, tailoring, quality, check and packaging. All orders are usually sent to our manufacturer for dispatch within 72 hours after the order is placed and payment is received.
<br>* Shipping time: This refers to the time it takes for items to be shipped from our warehouse to the destination.
The time it takes for your order to be delivered to you depends on your location:
<br>* United States: 9-18 business days
<br>* Canada: 16-35 business days
<br>* United Kingdom: 20-30 business days
<br>* Germany: 5-15 business days
<br>* France: 2-7 business days
<br>* Italy: 2-7 business days
<br>* Spain: 2-10 business days
<br>* Other EU countries 2-30 days depending on your location. Usually it takes up to 15 days.
<br>However, in some cases this can take up to 36 working days in the event of a delay.
<br><br>
All orders are shipped using courier services and can be tracked online.
<br><br>
Some items may take longer if shipped internationally, depending on various factors, such as which postage service/company is being used, and any potential delays with customs. If you have any questions, or if you are experiencing any unexpected delays with receiving your order, please contact us for assistance.
<br>*Please note that your tracking information might not be sent to you once your order leaves our warehouse, since we need to receive this information from the courier and upload it into our system. However, if you did not receive a tracking link within 72 hours of placing your order, please contact us via email at support@goodsvil.com
    </div>  
</div> 

<script type="text/javascript">
    
    $(".modal").each( function(){
    $(this).wrap('<div class="overlay"></div>')
});


$(document.createElement('img'), {
    src: 'https://1693021541.rsc.cdn77.org/lands/vest/giddybox-closeBtn.png',
    'class': 'closeb'
}).prependTo('.overlay');


var newimg=document.createElement("img");
 
newimg.setAttribute("src","https://1693021541.rsc.cdn77.org/lands/vest/giddybox-closeBtn.png");
newimg.setAttribute("class","closeb");
 
 $('.overlay').prepend(newimg);



$(".open-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
            modal = $($this).data("modal");
    
    $(modal).parents(".overlay").addClass("open");
    setTimeout( function(){
        $(modal).addClass("open");
    }, 350);
    
    $(document).on('click', function(e){
        var target = $(e.target);
        
        if ($(target).hasClass("overlay")){
            $(target).find(".modal").each( function(){
                $(this).removeClass("open");
            });
            setTimeout( function(){
                $(target).removeClass("open");
            }, 350);
        }
        
    });
    
});

$(".close-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
            modal = $($this).data("modal");
    
    $(modal).removeClass("open");
    setTimeout( function(){ 
        $(modal).parents(".overlay").removeClass("open");
    }, 350);
    
}); 
 $(".closeb").click(function(event) {
  
    $(".open").removeClass('open');

}); 




$(".offer-product").click(function(event) {
    $(".selected").removeClass('selected');
    $(this).addClass('selected');

    //products();
});

</script>




<script type="text/javascript">
    link1_1="https://test-dani-aar.myshopify.com/cart/15423741493338:1?channel=buy_button"; //1 tornado  
 

    link2_1="https://test-dani-aar.myshopify.com/cart/15423741493338:2?channel=buy_button"; //2+1 tornado
 


    link3_1=" https://test-dani-aar.myshopify.com/cart/15423741493338:3,15423800279130:1?channel=buy_button";//1+1 tornado
    link4_1=" https://test-dani-aar.myshopify.com/cart/15423741493338:4,15423800279130:2?channel=buy_button";//1+1 tornado
    link5_1=" https://test-dani-aar.myshopify.com/cart/15423741493338:5,15423800279130:3?channel=buy_button";//1+1 tornado
 

   

 
    $(".lastone").attr({    "href": link3_1 });
 
    $(".offer-products").click(function(event) {
            if($(".offer-product:first-child").hasClass('selected')){
                
                

                            $(".lastone").attr({    "href": link1_1 }); 
                  
            }
            if($(".offer-product:nth-child(2)").hasClass('selected')){
                
                   

                            $(".lastone").attr({    "href": link2_1 }); 
                   
            }
            if($(".offer-product:nth-child(3)").hasClass('selected')){
                
                   
                            $(".lastone").attr({    "href": link3_1 }); 
                  
            }

            if($(".offer-product:nth-child(4)").hasClass('selected')){
                
                   
                            $(".lastone").attr({    "href": link4_1 }); 
                  
            }
            if($(".offer-product:nth-child(5)").hasClass('selected')){
                
                   
                            $(".lastone").attr({    "href": link5_1 }); 
                  
            }
    });

    $("a.scrolling").click(function(event){event.preventDefault();$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500);});

</script>

















<?php wp_footer(); ?>

<style type="text/css">
    .closeb{
        cursor: pointer;
    
    position: absolute;
    top: 29px;
    right: 27px;
    z-index: 776;
}
.offerproductlabel{
    overflow: hidden;
    transform: scale(1);
}
.offerproductlabel:before{
 content: "Most Popular";
    width: 134px;
    height: 24px;
    background: red;
    position: absolute;
    text-align: center;
    right: -32px;
    margin-top: 28px;
    transform: rotate(49deg);
    overflow: hidden;
    color: white;
        font-size: 13px;
    line-height: 2.1;
}
.offerproductlabel2{
    overflow: hidden;
transform: scale(1);
}

.offerproductlabel2:before{
 content: "Best Deal";
    width: 134px;
    height: 24px;
    background: green;
    position: absolute;
    text-align: center;
    right: -32px;
    margin-top: 28px;
    transform: rotate(49deg);
    overflow: hidden;
    color: white;
        font-size: 13px;
    line-height: 2.1;
}

h1{
    font-size: 24px;
}

/*modals*/

.modal {
        position: initial;
    top: 100px;
    right: 2px;
    bottom: auto;
    left: auto;
    z-index: auto;
    display: block;
    overflow: auto;
    outline: auto;
}
 

.overlay .btn {
  padding: 20px 50px;
  display: inline-block;
  background: #EF233C;
  color: white;
  text-decoration: none;
  transition: 0.35s ease-in-out;
  font-weight: 700; box-sizing: border-box;
}
.btn:hover {
  background: #dc1029; box-sizing: border-box;
  color: #fff;
}

.overlay {
  width: 100%;
  min-height: 100vh;
  display: flex; box-sizing: border-box;
  
  align-items: center;
  flex-direction: column;
  padding: 40px;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  opacity: 0;
  pointer-events: none;
  transition: 0.35s ease-in-out;
  max-height: 100vh;
  overflow-y: auto;z-index: 222;
}
.overlay.open {
  opacity: 1;
  pointer-events: inherit; box-sizing: border-box;
}
.overlay .modal {
      width: 100%;
  background: white; box-sizing: border-box;
  text-align: left;
  padding: 40px 20px;
  box-shadow: 0px 1px 10px rgba(255, 255, 255, 0.35);
  opacity: 0;
  pointer-events: none;
  transition: 0.35s ease-in-out;
  max-height: 100vh;
  overflow-y: auto;
}
.overlay .modal.open {
  opacity: 1; box-sizing: border-box;
  pointer-events: inherit;
}
.overlay .modal.open .content {
  transform: translate(0, 0px); box-sizing: border-box;
  opacity: 1;
}
.overlay .modal .content {
  transform: translate(0, -10px);
  opacity: 0; box-sizing: border-box;
  transition: 0.35s ease-in-out;
}
.overlay .modal .title {
  margin-top: 0; box-sizing: border-box;
}

/*modals*/
</style>






 

<style type="text/css">
    .quantity .plus, .quantity .minus {
    display: inline-block;
    width: 30px;
    height: 35px;
    padding: 0 10px !important;
    background-color: #efedea;
    border-radius: 5px;
    border: 1px solid #e2894b;
    cursor: pointer;
    position: relative;
}

.quantity .plus:before, .quantity .minus:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .5;
}
 .quantity .plus:before {
    background: url(https://vizer.cc/plus-symbol.png);
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center center;
}
.quantity .minus:before {
    background: url(https://vizer.cc/minus-symbol.png);
    background-size: 20px 10px;
    background-repeat: no-repeat;
    background-position: center center;
}
</style>

<script type="text/javascript">
    $(".fupsellbtn").click(function(event) {
        $(".fupselladded").show("slow");
        $(".fupsellbtn").hide("slow");
        setTimeout(quantityshow,1000);
    });
    function quantityshow(){
        $(".fupselladded").hide("slow");
        $("#presell-quantity").show("slow");
    }

function presellAdd(){
    a=$(".spanquantity").html();
    b=a/1+1;
    console.log(a); console.log(b);
    $(".spanquantity").html(b);
}
    function presellSub(){
            a=$(".spanquantity").html();
            b=a/1-1;
            if (b=="0") {
                $("#presell-quantity").hide("slow");
                $(".fupsellbtn").show("slow");
            } else{
                $(".spanquantity").html(b);
            }
    }
</script>