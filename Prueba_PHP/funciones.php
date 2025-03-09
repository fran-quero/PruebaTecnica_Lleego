<?php

    //EJERCICIO 1

    /**
     * Recibe una frase y devuelve la frase donde cada palabra tiene invertida las letras
     * 
     * @param string $entrada Frase de entrada
     * 
     * @return string Frase con cada palabra invertida
     * 
     */
    function reverseLettersInWords(string $entrada):string{

        //Si es una frase separamos cada palabra en una posicion del array palabras
        $palabras = explode(" ", $entrada);

        for($i=0; $i<count($palabras); $i++){

            //Funcion para invertir una palabra
            $palabras[$i] = strrev($palabras[$i]);

        }
        
        //Devolvemos como un solo string, uniendolo con un espacio
        return implode(" ", $palabras);
    }   

    //EJERCICIO 2

    /**
     * Recibe un array de numeros y devuelve el mayor de ellos o un mensaje de error si esta vacio
     * 
     * @param array $numbers Array de numeros
     * 
     * @return float El numero mayor
     * @return string Mensaje de error si esta vacio
     */
    function findLargestNumber(array $numbers): float | string {
        
        //Si esta vacio devuelve un mensaje de error
        if(count($numbers)==0){

            return "Error: debes introducir algun número";

        }
        else{

            //Cojo el primer numero de el array de numeros para evitar fallos
            $max_number = $numbers[0];

            foreach($numbers as $number){
                    
                if($number>$max_number) $max_number = $number;
                
            }

            return $max_number;
        }
    }



        

?>