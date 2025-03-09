<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba de funciones</title>
    <?php

        require "funciones.php";

    ?>
    <style>
        .error{
            color: red;
        }
    </style>
</head>
<body>
    <?php

        if($_SERVER["REQUEST_METHOD"]=="POST"){

            //Recojo el campo form que uso para comprobar el formulario que esta mandando la peticion
            $form = $_POST["form"]??"";


            //Formulario 1
            if($form === "form1"){

                //Utilizamos el operador para evitar posibles errores
                $entrada = $_POST["entrada"]??"";

                //Validamos que no este vacio
                if(!empty($entrada)){
                    
                    //Sanitizamos y usamos la funcion
                    $entrada = htmlspecialchars(trim($entrada));
                    $salida = reverseLettersInWords($entrada);
                }
                else{
                    $err_entrada = "Por favor, introduzca una entrada de texto para invertira.";
                }

            }

        }


    ?>

    <h3>Ejercicio 1: Invertir las Letras de Cada Palabra</h3>
    
    <form action="" method="POST">

        <!--Declaro un hidden con valor form1 para identificar las diferentes pruebas-->
        <input type="hidden" name="form" value="form1">

        <label for="entrada">Palabra o frase a invertir:</label>
        <input type="text" id="entrada" name="entrada" placeholder="Escribe tu palabra o frase">
        <br><br>

        <!--Mensaje de error-->
        <?php if(isset($err_entrada)) echo "<p class='error'>$err_entrada</p>" ?>
        
        <label for="salida">Resultado invertido:</label>

        <!--Cuando se realice le inversion y se instancie la variable se muestra-->
        <input type="text" id="salida" name="salida" value="<?php if(isset($salida)) echo $salida ?>" readonly placeholder="Resultado invertido">
        <br><br>
        

        <input type="submit">
    </form>



</body>
</html>