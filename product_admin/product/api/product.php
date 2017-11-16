<?php

class Product
{
    public $product_list;
    public $last_id;
    public $product_list_src;
    public $last_id_src;
    public function __construct(){
        $this->product_list_src=dirname(__FILE__).'/../data/product.json';
    }
}
$product = new Product();
$product->__construct();
var_dump(dirname(__FILE__));