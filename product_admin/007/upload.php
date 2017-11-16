<?php
/**
 * Created by PhpStorm.
 * User: qijunnan
 * Date: 2017/11/14
 * Time: 11:37
 */
$tmp_name = @$_FILES['avatar']['tmp_name'];
if($tmp_name){
    move_uploaded_file($tmp_name,'./image'.rand(1000,9999).'.jpg');
    var_dump($_FILES);
}else{
    die('文件有误');
}