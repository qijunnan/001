<?php

class Product
{
    public $product_list;
    public $params;
    public $file_path = './product.json';

    public function __construct()
    {
        $this->product_list = $this->read() ?: [];
        $this->params = array_merge($_GET, $_POST);
        $action = $this->params['action'];
        $result = $this->$action();
        echo $this->json($result);
    }

    public function add()
    {
        $title = $this->params['title'];
        $price = $this->params['price'];
        var_dump($title);
        if (!$title || !$price) {
            return ['success' => false, 'msg' => '参数有误'];
        }
        $this->product_list[] = [
            'title' => $title,
            'price' => $price,
        ];
        $this->sync();
        return ['success' => true];
    }

    public function remove()
    {
        $index = $this->params['id'];
        unset($this->product_list[$index]);
        $this->sync();
        return ['success' => true];
    }

    public function update()
    {
        $params = $this->params;
        $index = $params['id'];
        $product = $this->product_list[$index];
        $this->product_list[$index] =
            array_merge($product, [
                'title' => $params['title'],
                'price' => $params['price'],
            ]);
        $this->sync();
        return ['success' => true];
    }

    public function read()
    {
        $json = file_get_contents($this->file_path);
        return json_decode($json, true);
    }

    public function sync()
    {
        file_put_contents($this->file_path, json_encode($this->product_list));
    }

    public function json($data)
    {
        header('Content-Type:application/json');
        return json_encode($data);
    }
}

$product = new Product();