<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Practice</title>
</head>
<body>
    <?php 
        $n = $_GET['n'];
        //just wrote echo 15 times in a row
        for($i = 1; $i <= 15; $i++) {
            echo $i . " x " . $n . " = " . $i * $n . "</br>";
        }
    ?>
</body>
</html>