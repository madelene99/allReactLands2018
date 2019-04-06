
<? 
// ----------------------------конфигурация-------------------------- // 

$adm="natusad@gmail.com,a.tkachenko84@gmail.com";

$date=date("d.m.y"); // число.месяц.год 

$time=date("H:i"); // часы:минуты:секунды 

//---------------------------------------------------------------------- // 

// Принимаем данные с формы 
$name=$_POST['pol1'];  
   
$email=$_POST['pol2'];  
$country=$_POST['pol3'];  
$skype=$_POST['pol4'];  
  
$how=$_POST['pol5'];  
$how6=$_POST['pol6'];  
$ft=$_POST['ft'];  
$ft2=$_POST['ft2'];  
   
 





$msg=" 

data from acc.voyage:

 


name: $name
email: $email
country: $country
skype: $skype
How did you hear about AccVoyage Service?: $how
What is your level of experience?: $ft
  
  Please indicate the reasons: $ft2
  If specific issue  answer will be here: $ft3
Promo if it was: $how6
"; 

// Отправляем письмо админу  



mail("$adm", " data from acc.voyage -  $name", "$msg"); 

// Сохраняем в базу данных 

$f = fopen("message.txt", "a+"); 

fwrite($f," \n $date $time"); 

fwrite($f,"\n $msg "); 

fwrite($f,"\n ---------------"); 

fclose($f); 

echo "<script>document.location.href='http://acc.voyage/';</script>";

?>

