<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relacion de ejercicios1</title>
    <link rel=stylesheet href=styles/style.css>
</head>
<body>
    <h2>Tipos de datos básicos</h2>
    <?php
        $pais = 'España';
        $habitantes = 4500000;
        $continente = 'Europa';

        echo "Pais: " . $pais . " Tipo: " . gettype($pais) . "<br>";
        echo "Número de habitantes: ". $habitantes . " Tipo: " . gettype($habitantes) . "<br>";
        echo "Continente: ". $continente . "Tipo: ". gettype($continente);
    ?>



    <h2>Conversor euros a dolares</h2>
    <?php
        $euro = 50;
        $dolar = $euro * 1.14;

        echo "Euros: ".$euro . "<br>";
        echo "Dolares: ".$dolar;
    ?>

    <h2>Cuadrado de números naturales</h2>
    <?php
    
        $num = 1;

        while($num <= 40){
            echo "El cuadrado de ".$num." = ". $num**2 . "<br>";
            $num++;
        }
    
    
    ?>



    <h2>Esfera</h2>
    <h3>Longitud, superficie y volumen</h3>

    <?php
        $radio = 10;
        
        $longitud = 2 * pi() * $radio;
        $superficie = 4 * pi() * $radio**2;
        $volumen = 4/3 * pi() * $radio**3;

        echo "LONGITUD: ". round($longitud, 2) . "<br>";
        echo "SUPERFICIE: " . round($superficie, 2) . "<br>";
        
        echo "VOLUMEN: ";
        printf("%.2f", $volumen);
    ?>

    <h2>Ecuación de segundo grado</h2>
    <?php 
        $a = 10;
        $b = 25;
        $c = 15;

        $contRaiz = $b**2 - 4 * $a * $c;

        $result1 = (-$b + sqrt($contRaiz))/(2 * $a);
        $result2 = (-$b - sqrt($contRaiz)) / (2 * $a);

        printf("Primer resultado: %.2f<br> Segundo resultado: %.2f", $result1, $result2);
        

    ?>
</body>
</html>

