<?php

$to = 'iamivnkxt@gmail.com';
$sitename = "insitestudio.com";

$name = $_POST['Name'];
$site = $_POST['site'];
$mail = $_POST['Email'];
$name = htmlspecialchars($name);
$phone = htmlspecialchars($site);
$mail = htmlspecialchars($mail);
$name = trim($name);
$site = trim($site);
$mail = trim($mail);
$from = "insitestudio.com";
$message = "Имя: $name \nСайт: $site \nE-mail: $mail";
$pagetitle = "Новая заявка по рекомендациям с сайта \"$sitename\"";
$headers = "From: $from\r\nReply-to: $mail\r\nContent-type: text/plain; charset=utf-8\r\n"; 
mail($to, $pagetitle, $message, $headers);
?>