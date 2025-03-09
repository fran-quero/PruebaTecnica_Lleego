<?php

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

?>