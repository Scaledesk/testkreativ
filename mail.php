<?php
if($_POST['formid']=='contact')
{
	  $name=$cust_name=$_POST['cust_name'];
	  $email=$_POST['cust_email'];
		$email_to_send_to='sagarsneh@gmail.com';
	  $comment=$_POST['comments'];
	  $cSub=$_POST['cSub'];
	  $email_subject ="awesome Ideas theme";
}

$headers= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers.= 'From: '.$name.'<'.$email.'> ' . "\r\n" .'Reply-To: '.$email.' ' . "\r\n" .'X-Mailer: PHP/' . phpversion();

 	$ret = @mail($email_to_send_to,$email_subject,$comment,$headers);
 	if(!$ret){
			echo 'Email Could not be sent due to a server problem. Please check back later';
 	}else{
			echo 'Email sent successfully!';
 	}

	die();


?>