<?php
/**
 * Created by PhpStorm.
 * User: qijunnan
 * Date: 2017/11/13
 * Time: 10:27
 */
session_start();

$username = @$_POST['username'];
$password = @$_POST['password'];

if($username == 'lsd' && $password == '123456') {
    $_SESSION['username'] = 'lsd';
    echo '登录成功';
    header('Location:/');
}else{
    echo '用户名或密码有误';
}

