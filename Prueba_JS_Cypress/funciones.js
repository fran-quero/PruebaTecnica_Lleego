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


    

}