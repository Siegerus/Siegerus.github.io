<?php
 
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
  
  if (!empty($_POST['user']) && !empty($_POST['sername']) && !empty($_POST['phone']) && !empty($_POST['mail']) && !empty($_POST['company']) && !empty($_POST['residents'])) {
     
    $txt = "ATB-project%0AДанные для регистрации%0A%0A";
     
    if (isset($_POST['user']) && !empty($_POST['user'])) {
        $txt .= "Имя:" . strip_tags(trim(urlencode($_POST['user']))) . "%0A";
    }

    if (isset($_POST['sername']) && !empty($_POST['sername'])) {
      $txt .= "Фамилия:" . strip_tags(trim(urlencode($_POST['sername']))) . "%0A";
  }
     
    if (isset($_POST['phone']) && !empty($_POST['phone'])) {
        $txt .= "Номер телефона:" . strip_tags(urlencode($_POST['phone'])) . "%0A";
    }

    if (isset($_POST['mail']) && !empty($_POST['mail'])) {
      $txt .= "E-mail:" . strip_tags(urlencode($_POST['mail'])) . "%0A";
    }

    if (isset($_POST['company']) && !empty($_POST['company'])) {
      $txt .= "Название компании:" . strip_tags(urlencode($_POST['company'])) . "%0A";
    }
 
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}