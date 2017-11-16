<?php
/**
 * Created by PhpStorm.
 * User: qijunnan
 * Date: 2017/11/10
 * Time: 14:24
 */
//echo '123';
//$animals=['chicken','rabbit','tiger'];
//for($i=0;$i<count($animals);$i++){
//    var_dump($animals[$i]);
//}
//
//function chicken_and_rabbit($head,$foot){
//    $chicken =0;
//    $rabbit =0;
//    for($chicken==1;$chicken<$head;$chicken++){
//        $rabbit = $head - $chicken;
//        if($chicken*2 + $rabbit*4 == $foot){
//            echo 'Chicken: ' ,$chicken;
//            echo 'Rabbit: ',$rabbit;
//            break;
//        }
//    }
//}

//function chicken_and_rabbit($head,$foot){
//    $rabbit = ($foot/2)-$head;
//    $chicken=$head-$rabbit;
//    echo "$rabbit</br>$chicken";
//}
//chicken_and_rabbit(1200,3946);

//$a=[1,2,3,4];
//for($i=0;$i<count($a);$i++){
//    var_dump($a[$i]);
//};

function chicken_and_rabbit($head,$foot){
//    $chicken = 0;
//    $rabbit = 0;
    $chicken=0;
    for($chicken == 1; $chicken<$head; $chicken++){
        $rabbit = $head - $chicken;
        if($chicken*2+$rabbit*4 == $foot){
            echo $chicken;
            echo $rabbit;
            break;
        }
    }
}
chicken_and_rabbit(30,86);
?>
<?php
class Person{
    public $name;
    public $age;
    protected $number = 2;
    protected $animals='cat';
    function yo(){
        echo 'yoooo';
    }
}
$whh = new Person;
$whh ->name = 'whh';
$whh ->age = 20;
$whh ->yo();
var_dump($whh);
class Man extends Person{

}
$man = new Man;
$man -> name = 'lsd';
$man -> age = 25;
var_dump($man);