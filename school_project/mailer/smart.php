<?php 

$user = $_POST['user']; 
$phone = $_POST['phone'];             
$email = $_POST['email'];


require_once('phpmailer/PHPMailerAutoload.php');        
$mail = new PHPMailer;                               
$mail->CharSet = 'utf-8';


$mail->isSMTP();                                     
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;                               
$mail->Username = '@gmail.com';                 
$mail->Password = '';                           
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;                                    
 
$mail->setFrom('@gmail.com', 'school_project');  
$mail->addAddress('@gmail.com');     

$mail->isHTML(true);                                  

$mail->Subject = 'Данные';                      
$mail->Body    = '
		<b>Пользователь оставил данные!</b> <br> 
	Имя: ' . $user . '<br>
	Номер телефона: ' . $social . '<br>
    E-mail: ' . $email . ''; 
	

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>
