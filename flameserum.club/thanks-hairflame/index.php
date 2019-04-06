<!DOCTYPE html>
 
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hair flame</title>
 
<!-- Assets -->
<link rel="stylesheet" href="./index_files/tilda-grid-3.0.min.css" type="text/css" media="all">
<link rel="stylesheet" href="./index_files/tilda-blocks-2.12.css" type="text/css" media="all">
<link rel="stylesheet" href="./index_files/tilda-animation-1.0.min.css" type="text/css" media="all">

    <!-- Facebook Pixel Code -->
<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','2006856192682471');fbq('track','PageView');fbq('track','ViewContent');fbq('track', 'Purchase', {value: '0.00', currency: 'USD'});
</script>
<noscript>
 <img height="1" width="1" src="https://www.facebook.com/tr?id=2006856192682471&ev=PageView
&noscript=1" data-pagespeed-url-hash="1434031066"/>
</noscript>
<!-- End Facebook Pixel Code -->
  <!--ClickMeter.com code for conversion: hairflame-conversion-code -->
<script type='text/javascript'>
    var ClickMeter_conversion_id = 'C24CA0512421422E80996FBEBFD2211D';
    var ClickMeter_conversion_value = '0.00';
    var ClickMeter_conversion_commission = '0.00';
    var ClickMeter_conversion_commission_percentage = '0.00';
    var ClickMeter_conversion_parameter = 'empty';
</script>
<script type='text/javascript' id='cmconvscript' src='//s3.amazonaws.com/scripts-clickmeter-com/js/conversion.js'></script>
<noscript>
<img height='0' width='0' alt='' src='//www.clickmeter.com/conversion.aspx?id=C24CA0512421422E80996FBEBFD2211D&val=0.00&param=empty&com=0.00&comperc=0.00&pixel=true' />
</noscript> 

</head>
<body class="t-body" style="margin: 0px;" onload="gtag('event', 'click', {'event_category': 'spasibo','event_label': 'spasibo'});">

<!--allrecords-->
<div id="allrecords" class="t-records" data-hook="blocks-collection-content-node" data-tilda-project-id="134091" data-tilda-page-id="2101658" data-tilda-page-alias="andreasuccess" data-tilda-formskey="0f23d082d005967ce9e43896cae7614d">
<div id="rec41279316" class="r t-rec" style=" " data-animationappear="off" data-record-type="213">
<!-- cover -->
<div class="t-cover" id="recorddiv41279316" bgimgfield="img" style="height:100vh; background-image:url(&#39;before_vitamin.PNG&#39;);">
<div class="t-cover__carrier loaded" id="coverCarry41279316" data-content-cover-id="41279316" data-content-cover-bg="before_vitamin1.PNG" data-content-cover-height="100vh" data-content-cover-parallax="" style="background-image: url(&quot;before_vitamin1.PNG&quot;); height: 100vh; background-attachment: scroll;" src="">
</div> <div class="t-cover__filter" style="height:100vh;background-color:#000;filter:alpha(opacity:40);KHTMLOpacity:0.4;MozOpacity:0.4;opacity:0.4;">
</div>
<div class="t-container"> <div class="t-col t-col_7">
<div class="t-cover__wrapper t-valign_middle" style="height:100vh; position: relative;z-index: 1;"> <div class="t189"> <div data-hook-content="covercontent"> <div class="t189__wrapper"> <div class="t189__title t-title" style="" field="title">Thank you for order! Our Couriers will contact your to schedule delivery time</div>     </div> </div> </div> </div> </div> </div> </div> </div>
</div>
<!--/allrecords-->
  
</body>
</html>





<?php
// ----------------------------конфигурация-------------------------- // 
 

$date=date("dmy"); // число.месяц.год 

$time=date("H:i"); // часы:минуты:секунды 

//---------------------------------------------------------------------- // 
 
 

// Принимаем данные с формы 




$name=$_GET['name'];  
$email=$_GET['email'];
$number=$_GET['phone'];
$city=$_GET['city']; 
$adress1=$_GET['adress1']; 
$building1=$_GET['building1']; 
$adress2=$_GET['adress2']; 
$quantity=$_GET['quantity']; 
 
$aq=$_GET['affsub1'];
$aw=$_GET['affsub2'];
$ae=$_GET['affsub3'];
$ar=$_GET['affsub4'];
$at=$_GET['affsub5'];
$cid=$_GET['cid'];
$best=$_GET['best'];
$version=$_GET['version'];

$productName="Hairflame";

if ($quantity=="1") {
  $totalprice=167;
}
if ($quantity=="2") {
  $totalprice=242;
}
if ($quantity=="3") {
  $totalprice=317;
}
if ($quantity=="4") {
  $totalprice=392;
}

if ($version=="version-hairflame2-discount" || $version=="version-hairflame1-discount" ){
  $totalprice=$totalprice-20;
}




$trafficsource=$_GET['trafficsource'];
if ($trafficsource==1) {
  $trafficsource="fb";
}
if ($trafficsource==2) {
  $trafficsource="Exoclick";
}
if ($trafficsource==3) {
  $trafficsource="PlugRush";
}
if ($trafficsource==4) {
  $trafficsource="Popads";
}
if ($trafficsource==5) {
  $trafficsource="Advertiser";
}

if ($trafficsource==6) {
  $trafficsource="Mobusi";
}

if ($trafficsource==7) {
  $trafficsource="Juicyads";
}








if ($trafficsource==8) {
  $trafficsource="TrafficForce";
}


if ($trafficsource==9) {
  $trafficsource="EroAdvertising";
}


if ($trafficsource==10) {
  $trafficsource="Clickadu";
}


if ($trafficsource==11) {
  $trafficsource="Adsterra";
}








 
 


?>
<form id="forma1" method="POST">
                           

<input type="hidden" name="entry.1075552607" value="<?php echo $version ?>">
<input type="hidden" name="entry.1257252140" value="<?php echo $trafficsource ?>">
<input type="hidden" name="entry.2008555940" value="<?php echo $best ?>">
<input type="hidden" name="entry.2146896521" value="<?php echo $name ?>">
<input type="hidden" name="entry.141185477" value="<?php echo $number ?>">
<input type="hidden" name="entry.782567541" value="<?php echo $city ?>">
<input type="hidden" name="entry.1886454476" value="<?php echo $adress1 ?>">
<input type="hidden" name="entry.1596702275" value="<?php echo $building1 ?>">
<input type="hidden" name="entry.1430720346" value="<?php echo $adress2 ?>">
<input type="hidden" name="entry.570035611" value="<?php echo $totalprice ?>">
<input type="hidden" name="entry.1968536579" value="<?php echo $quantity ?>">
<input type="hidden" name="entry.1824765562" value="<?php echo $cid ?>">

  
</form>




<form id="form2" method="POST">
                     


<input type="hidden" name="entry.1224358259" value="<?php echo $name ?>">
<input type="hidden" name="entry.2131165516" value="<?php echo $adress1 ?> <?php echo $building1 ?> <?php echo $adress2 ?>">
<input type="hidden" name="entry.1036546521" value="<?php echo $city ?>">

<input type="hidden" name="entry.1061109966" value="DB<?php echo $date ?>00">
<input type="hidden" name="entry.939986734" value="United Arab Emirates">
 <input type="hidden" name="entry.1714023627" value="<?php echo $quantity ?> <?php echo $productName ?>">
 <input type="hidden" name="entry.1366655668" value="<?php echo $number ?>">
 <input type="hidden" name="entry.1277200215" value="<?php echo $totalprice ?>">
 
  
</form>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

<script>
  $(document).ready(function() {

    window.history.pushState(null, null, "https://hairflame.shop/thanks/");

a="<?php echo $name ?>";
if (a.length<1) { console.log("why you renew page?")} 
  else
    {good();}

function good(){

     //   urls="https://mazl.trackthis.pw/postback?cid=<?php echo $cid ?>";
     urls="https://trackb.space/click.php?cnv_id=<?php echo $cid ?>";
         $.ajax({
        url:     urls,  
        type:     "GET",  
        dataType: "html",  
        data: $("form").serialize(),  
        success: function(response) {  
              console.log(response);
         //     window.location.href = "https://mens-mane.com/thanks/";

        },
        error: function(response) {  
       //     window.location.href = "https://mens-mane.com/thanks/";
        }
    });

    $.ajax({
        url:     "https://docs.google.com/forms/d/e/1FAIpQLSdAQsmlLVfZIFJ-4onkTZtarzf2Q6Kv2wow0y4J-XyEI8n1_Q/formResponse",  
        type:     "GET",  
        dataType: "html",  
        data: $("#forma1").serialize(),  
        success: function(response) {  
              console.log(response);
             // window.location.href = "https://we-choose-this-one.com/thanks/";

        },
        error: function(response) {  
          //  window.location.href = "https://we-choose-this-one.com/thanks/";
        }
    });
          $.ajax({     
        url:     "https://docs.google.com/forms/d/e/1FAIpQLSeAkUEiWdPEKGmbGfflqESAc0Osa9SG60K_gKtAUDefw6YRjA/formResponse",  
        type:     "GET",  
        dataType: "html",  
        data: $("#form2").serialize(),  
        success: function(response) {  
              console.log(response);
             // window.location.href = "https://we-choose-this-one.com/thanks/";

        },
        error: function(response) {  
          //  window.location.href = "https://we-choose-this-one.com/thanks/";
        }
    });

}


    //document.location.href="https://mens-mane.com/thanks/";
  });
</script>



