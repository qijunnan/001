<?php
/**
 * Created by PhpStorm.
 * User: qijunnan
 * Date: 2017/11/9
 * Time: 10:07
 */

$user_list=[
    [
      'name' =>'whh',
      'age' =>20
    ],
    [
      'name' =>'lsd',
      'age' =>23
    ],
    [
      'name' =>'muhaha',
      'age' =>24
    ],
];
?>
<h1>用户列表</h1>
<?php foreach ($user_list as $user):?>
<div><h2><?php echo $user['name'] ?></h2></div>
<?php endforeach;?>
<?php
$a = 1;
$b = 2;
echo $a + $b;
?>
<?php
$whh =[
    'name' =>'whh',
    'age' =>20,
];
?>
<h1>用户列表</h1>
<?php foreach ($user_list as $user): ?>
<div><?php echo $user['name'] ?></div>
<div>yo</div>
<div>yo2</div>
<hr>
<?php endforeach; ?>

<?php foreach ($whh as $key => $value): ?>
<div><?php echo $key ?> : <?php echo $value ?></div>
<?php endforeach; ?>
<?php
?>
<?php
$chicken = 0;
$rabbit = 0;
for($chicken == 1;$chicken<=30;$chicken++){
    $rabbit = 30-$chicken;
    if($chicken*2+$rabbit*4 == 86){
        echo$chicken,'<br/>';
        echo$rabbit,'<br/>';
        break;
    }
};
$t=(86/2)-30;
$j=30-$t;
echo $t,'</br>',$j;
?>