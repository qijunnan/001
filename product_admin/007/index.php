<?php
/**
 * Created by PhpStorm.
 * User: qijunnan
 * Date: 2017/11/13
 * Time: 10:27
 */
session_start();

echo @$_SESSION['username'] .'你好';
?><br>
<a href="world.php">登录</a>
<a href="signout.php">注销</a>
<a href="me.php">用户中心</a>
