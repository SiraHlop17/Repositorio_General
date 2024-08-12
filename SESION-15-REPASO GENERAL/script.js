//Variables

var num1 = 4;
var num2 = 2;
var texto1 = "4";
var num3 = 8;



//Salidas

console.log(num2>num1);
console.log(num1==texto1);
console.log(num1=== texto1);

//Operadores lógicos

/*El num1 es mayor al num2 ó el num3 es menor a num1*/

console.log(num1>num2 || num3<num1);

//El num1 es mayor a num2 y el num2 es mayor a num3

console.log(num1>num2 && num2> num3);

//Condicional

//Si num1 es mayor que num2 "Maria gana el juego",
//si num3 es mayor a num1 "Mario gana el juego"
//caso contrario "Juan gana el juego"


if(num1> num2){
    console.log("Maria gana el juego");
}
else if(num3 > num1){
    console.log("Mario gana el juego")
}
else{
    console.log("Juan gana el juego");
}

/*Si la primera letra del nombre es "A" entonces colocar "tu nombre comienza con A", si la primera letra de tu 
nombre comeinza con "B" colocar "tu nombre comienza con B" , caso contrario colocar "nose con que letra inicia tu nombre"*/
var nombre =  "silvanna"

if( nombre[0] == "A" ){
    console.log("Tu nombre comienza con A");
}
else if(nombre[0] =="B"){
    console.log("Tu nombre comienza con B");

}
else{
    console.log("Nose con que letra inicia");
} 


console.log(`mi nombre es ${nombre}`)