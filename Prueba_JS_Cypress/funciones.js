window.onload = function(){

    //1. Filtrar números pares en un array
    /**
     * Filtra los números pares de un array.
     * 
     * @param {array} numeros  Entrada de array de números.
     * @returns {array} Devuelve un array con solo los números pares.
     */
    function filtrarPares(numeros){

        let pares = [];

        //Recorro todos los numeros
        numeros.forEach(num => {

            //Si el resto da cero es par y lo guardo en el array
            if(num%2==0){
                pares.push(num);
            }
        });

        return pares;

    }

    //Prueba de la funcion 1
    document.getElementById("ej1").onclick = function(){

        //Array de ejemplo
        let numeros = [1,2,3,4,5,6,7,8,9,10];

        //Muestro en el parrafo el resultado
        document.getElementById("solucion1").textContent = filtrarPares(numeros);

    }


    //2. Invertir una cadena de texto
    /**
     * Invertir una cadena de texto.
     * 
     * @param {string} entrada Cadena de entrada que se quiere inveritr. 
     * @returns {string} Devuelve la cadena invertida.
     */
    function invertirCadena(entrada){

        //Cada caracter del string ocupa una posicion del array
        entrada = entrada.split("");

        //Invierto el array
        entrada = entrada.reverse();

        //Devuelvo el array unido
        return entrada.join("");
    }

    //Prueba de la funcion 2
    document.getElementById("ej2").onclick = function(){

        let entrada = document.getElementById("entrada_ej2");

        //Muestro en el parrafo el resultado
        document.getElementById("salida_ej2").value = invertirCadena(entrada.value);

        //Limpio el campo de entrada
        entrada.value="";

    }

    //3. Recorrer un array con do...while y detenerse en un valor específico
    let mesesAño = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


    let i=0;

    do{
        //Imprimimos en consola
        console.log(mesesAño[i]);
        i++;
    
        //Primero se comprueba que esa iteracion no coincida con julio, si coincide acaba el bucle 
        //(tambien comprobamos la i para que no llege a ser mas grande que el array aunque sepamos que no va a pasar)
    }while(mesesAño[i]!="Julio" && i<mesesAño.length);




    //4. Conteo de vocales en una cadena

    let vocales = ["a","e","i","o","u"];

    /**
     * Devuelve cuantas vocales hay en una cadena.
     * 
     * @param {string} entrada Cadena de entrada.
     * @returns {int} Devuelve el numero de vocales.
     */
    function contarVocales(entrada){

        let num_vocales = 0;

        for(i=0;i<entrada.length;i++){

            //Comprobamos cada caracter, si esta sumamos al contador 
            //(pasamos a lowerCase para asegurar que comprobamos bien segun nuestro array de vocales)
            if(vocales.includes(entrada[i].toLowerCase())) num_vocales++;
        }

        return num_vocales;
    }

    //Prueba de la funcion 4
    document.getElementById("ej4").onclick = function(){

        let entrada = document.getElementById("entrada_ej4");

        //Muestro en el parrafo el resultado
        document.getElementById("salida_ej4").value = contarVocales(entrada.value);

        //Limpio el campo de entrada
        entrada.value="";

    }

    

}