<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];


// Формирование самого письма
if ((strlen($name) > 0) & (strlen($phone) > 0)){
    $title = "Новое обращение с сайта Yarville";
    $body = "
    <h2>Посетитель сайта просит перезвонить:</h2><br>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br>
    ";
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'yarville.info@gmail.com'; // Логин на почте
    $mail->Password   = 'zhdbkm2Zhjckfdkm'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('yarville.info@gmail.com', 'Yarville'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('blitz-coder@yandex.ru');  


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: thanks.html');