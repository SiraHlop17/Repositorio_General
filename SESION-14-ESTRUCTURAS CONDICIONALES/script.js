//Condicional 1

var color = "verde ";
var tamaño = "mediano";
var precio = 1000;
var estacion = "verano";

var nota = 16;

//si el color es verde y el precio es menor igual a 1000
//entonces lo compro, caso contrario me compro otro

if (color == "verde " && precio <= 1000) {
    console.log("Lo compro")
}
else {
    console.log("Me compro otro");
}

//si el tamaño es mediano o el color es verde lo compro,
//caso contrariome voy de viaje

if(tamaño =="mediano" || color == "verde") {
    console.log("Me lo compro")
}
else{
    console.log("Me voy de viaje");
}

//Si la estacion es invierno o la estacion es otoño "lo compro",
//caso contrario ahorro el dinero.

if( estacion == "invierno" || estacion == "otoño"){
    console.log("Lo compro")
}
else{
    console.log("Ahorro el dinero");
}

//Si desayunaste y te bañaste puedes salir de la casa

var desayunaste= true
var bañaste = false

if( bañaste && desayunaste){
    console.log("Puedes salir")
}
else{
    console.log("No puedes salir");
}

/*Si el tamaño es mediano ó el precio es menor igual a 1000,
ó el color es rojo entonces lo compro, caso contrario lo pongo en
el banco.*/

if (tamaño == "mediano" || precio <= 1000 || color =="rojo"){
    console.log("Lo compro")
}
else{
    console.log("Lo pongo en el banco");
}

/*Si la nota es mayor o igual a 10 y menor a 15 entonces tendra una "C",
si la nota es mayor a 15 y menor a 18, entonces tenrdra una "B".
caso contrario tendra una "A"*/

if (nota >= 10 && nota < 15){
    console.log("C")
}
else if ( nota > 15 && nota < 18){
    console.log("B")
}
else {
    console.log("A") 
}

