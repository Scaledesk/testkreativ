<?php
require 'PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail1 = new PHPMailer;
/*$email=$_POST['email'];*/

$name=$_POST['name'];
$comments=$_POST['comments'];
$email=$_POST['email'];

$emailadmin="hello@kreativstreet.com";
$subject = "Contact Us - Kreativ";


$Usersubject="Thank You for Kreativ";
$messageUsers=file_get_contents('template.html');


$message ='<html>
<body>
<div id="abcd" style="text-align:justify;font-size:18px;"> Name:-'.$name.'<br>Email :-'.$email.'</div>
</body>
</html>';
if ($comments) {
	$message ='<html>
<body>
<div id="abcd" style="text-align:justify;font-size:18px;"> Name:-'.$name.'<br>Email :-'.$email.'<br>Comments:-'.$comments. '</div>
</body>
</html>';
}


$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'sub5.mail.dreamhost.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'hi@scaledesk.com';                 // SMTP username
$mail->Password = 'qazplmq1w2e3r4';                       // SMTP password
//$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;// TCP port to connect to
$mail->IsHTML(true);
$mail->setFrom('hi@scaledesk.com', 'Kreativ');
//$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo('hi@scaledesk.com', 'noreply');

$mail1->isSMTP();                                      // Set mailer to use SMTP
$mail1->Host = 'sub5.mail.dreamhost.com';  // Specify main and backup SMTP servers
$mail1->SMTPAuth = true;                               // Enable SMTP authentication
$mail1->Username = 'hi@scaledesk.com';                 // SMTP username
$mail1->Password = 'qazplmq1w2e3r4';                           // SMTP password
//$mail1->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail1->Port = 587;// TCP port to connect to
$mail1->IsHTML(true);
$mail1->setFrom('hi@scaledesk.com', 'Kreativ');

/*if($_FILES['fileToUpload']){*/
$mail1->AddAttachment($_FILES['fileToUpload']['tmp_name'], $_FILES['fileToUpload']['name']);
/*}*/

$mail->addAddress($email, $name);     // Add a recipient


$mail1->addAddress($emailadmin);     // Add a recipient

$mail->Subject = $Usersubject;
$mail->Body    = $messageUsers;


$mail1->Subject = $subject;
$mail1->Body    = $message;
/*    echo "<pre/>";
    print_r($mail1);die;
*/

  




   
if($mail1->send())
 {
      if($mail->send()){
        
			         if(!$comments){
			            header("http://www.test.kreativstreet.com/thankyou.html");
                       

			         }else{
			         	echo "<p class='success'>Thanks for contacting us.</p>";
			         }
       


    }else{ 

		       if(!$comments){
		           header("http://www.test.kreativstreet.com/thankyou.html");
		           
		         }else{
		         	echo "<p class='success'>Thanks for contacting us.</p>";
		         }

        }


} else {
   
   
      echo "<p class='error'>Some error occurred!</p>";

      }
