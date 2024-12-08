<?php
 
  const TOKEN = ':';
 
  const CHATID = '-';
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  if (!empty($_POST['user']) && !empty($_POST['email']) && !empty($_POST['message'])) {
     
    $txt = "Club-project%0AСообщение от пользователя%0A%0A";
     
    if (isset($_POST['user']) && !empty($_POST['user'])) {
        $txt .= "Имя: " . strip_tags(trim(urlencode($_POST['user']))) . "%0A";
    }
     
    if (isset($_POST['email']) && !empty($_POST['email'])) {
        $txt .= "Почта: " . strip_tags(urlencode($_POST['email'])) . "%0A";
    }

    if (isset($_POST['message']) && !empty($_POST['message'])) {
      $txt .= "Текст письма: " . strip_tags(urlencode($_POST['message'])) . "%0A";
  }
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}
