<!doctype html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
</head>
<body>
<form action="api/product.php" method="post" enctype="multipart/form-data">
    <input type="text" name="title" value="手机">
    <input type="number" name="price" value="100">
    <input type="file" name="cover">
    <button type="submit">提交</button>
</form>
</body>
</html>