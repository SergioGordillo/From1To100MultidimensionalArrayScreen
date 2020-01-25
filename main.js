function mostrar() {

    let matriz = []; //Una matriz en JavaScript se declara el array y dentro se meten arrays

    for (let i = 0; i < 10; i++) { //Este for recorre las filas

        let array = [];

        for (let j = (i * 10) + 1; j <= (i * 10) + 10; j++) { //Este for recorre las columnas

            array.push(j); //El i sólo sirve para saber dónde se empieza y dónde se acaba, lo que se mete es realmente j

        }


        matriz.push(array); //Meto el array en la matriz



    }


    console.log(matriz);
    sumaColumnas(matriz);
    mostrarMatrizPantalla(matriz); 

}

function sumaColumnas(matriz) {

    let resultado = [];
    console.log(matriz.length);

    for (let j = 0; j < matriz.length; j++) {

        let sumatorio = 0; //reinicio el sumatorio

        for (let i = 0; i < matriz.length; i++) {

            sumatorio += matriz[i][j];

        }
        resultado.push(sumatorio); // voy metiendo los valores en el array
    }


    matriz.push(resultado); //meto el array en la matriz
    console.log(matriz);

}

function mostrarMatrizPantalla(matriz) {

    let tablaHTML=document.getElementById("tabla"); //cojo el div para el InnerHTML
    let tabla=document.createElement("table"); //Con esto creo la etiqueta table
    tablaHTML.appendChild(tabla); //Meto la etiqueta table en el div correspondiente
   


    for (let i = 0; i < matriz.length; i++) {

        let tr=document.createElement("tr"); //Con esto creo la etiqueta tr
        tabla.appendChild(tr); //Meto los tr dentro de la etiqueta table

        for (let j = 0; j < matriz[0].length; j++) {

            let numero=matriz[i][j];
            let numeroVisible=document.createTextNode(numero); //Con esto ya estoy seteando el valor que yo como usuario veré, creando un nodo de texto
            let td=document.createElement("td"); //Con esto creo la etiqueta td
            td.appendChild(numeroVisible); //Con esto meto el número en el td correspondiente
            tr.appendChild(td); //meto la etiqueta td dentro de la etiqueta tr


            //un for para meter la tabla
            //otro for para meter los valores

        }


    }




}


