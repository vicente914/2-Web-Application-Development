<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tirar los dados</title>
</head>
<body>
    <?php
        require_once __DIR__ . '/../vendor/autoload.php';

        $dado1 = random_int(1,6);
        $dado2 = random_int(1,6);

        echo "<h1>Tirar los dados</h1>";

        echo "<img src= 'img/dice$dado1.png' width = '75px'>";
        echo "<img src = 'img/dice$dado2.png' width = '75px'>";

        if($dado1 > $dado2){
        echo '<p>NO salio pareja</p>';    
        echo 'El mayor número conseguido fue '. $dado1;
        }
        else if($dado2 > $dado1){
            echo '<p>NO salio pareja</p>';
            echo 'El mayor número conseguido fue '. $dado2;
        }
        else{
            echo '<p>Salio pareja</p>';
            echo 'El mayor número obtenido fue '. $dado1;
        }
    ?>
</body>
</html>

