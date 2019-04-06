
<?php
// ----------------------------конфигурация-------------------------- // 
 

$date=date("d.m.y"); // число.месяц.год 

$time=date("H:i"); // часы:минуты:секунды 

//---------------------------------------------------------------------- // 
 
 

// Принимаем данные с формы 




$name=$_GET['name'];  
$number=$_GET['phone'];
$version=$_GET['version']; 
$best=$_GET['best']; 


 


?>


<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '349471775658390');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=349471775658390&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->

<script>
 fbq('track', 'Lead');
</script>


<form  method="POST">
	
<input type="hidden" name="entry.518311955" value="<?php echo $name ?>">
<input type="hidden" name="entry.146348709" value="<?php echo $number ?>">
<input type="hidden" name="entry.2030150665"  value="<?php echo $version ?>"  >
<input type="hidden" name="entry.1240150087"  value="<?php echo $best ?>"  >

	
</form>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
	jQuery(document).ready(function($) {

    window.history.pushState(null, null, "/");

a="<?php echo $name ?>";
if (a.length<1) { console.log("why you renew page?")} 
  else
    {good();}

function good(){

        urls="https://mazl.trackthis.pw/postback?cid=<?php echo $cid ?>";
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
        url:     "https://docs.google.com/forms/d/e/1FAIpQLScQOOteDRxs0y5tfaXCyPV23BgBXav4BCXmeSfEQT9YBnIbQg/formResponse",  
        type:     "GET",  
        dataType: "html",  
        data: $("form").serialize(),  
        success: function(response) {  
              console.log(response);
             // window.location.href = "https://mens-mane.com/thanks/";

        },
        error: function(response) {  
          //  window.location.href = "https://mens-mane.com/thanks/";
        }
    });
     document.location.href="https://test-dani-aar.myshopify.com/cart/16191609045082:1?channel=buy_button"

}


		//document.location.href="https://mens-mane.com/thanks/";
	});
</script>


 