const preguntas = [
'¿Cuál es el animal que siempre llega tarde?',
'¿Qué es lo que puede llenar una habitación pero no ocupa espacio?',
'¿Qué es lo que se rompe si lo dices en voz alta?',
'¿Qué es  lo que tiene cuello pero no cabeza?',
'¿Qué se puede romper sin tocarlo?',
]

const opciones = [
    ['Perro','Gato','León','Tortuga'],
    ['El aire','La luz','El agua','El sonido'],
    ['Un sueño','Un cristal','Un libro','Un corazón'],
    ['Una botella','Una serpiente','Un arbol','Un libro'],
    ['Un vaso','Una promesa','Un plato','Un cristal']
]

const clave = [
    [0,0,0,"L"],
    [0,"I",0,0],
    ["B",0,0,0],
    ["R",0,0,0],
    [0,"E",0,0]
]

var i = 0;
var puntaje = 0;

document.getElementById('op1').addEventListener('click', function () {
    actualizarPuntaje(0);
})
document.getElementById('op2').addEventListener('click', function () {
    actualizarPuntaje(1);
})
document.getElementById('op3').addEventListener('click', function () {
    actualizarPuntaje(2);
})  
document.getElementById('op4').addEventListener('click', function () {
    actualizarPuntaje(3);
}) 

 
function mostrarPreguntas() {
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById('op1').innerHTML = opciones[i][0];
    document.getElementById('op2').innerHTML = opciones[i][1];
    document.getElementById('op3').innerHTML = opciones[i][2];
    document.getElementById('op4').innerHTML = opciones[i][3];

}




function actualizarPuntaje(valor) {
    puntaje = clave[i][valor] + puntaje;

    i = i + 1;
    if (preguntas.length > i) {
        mostrarPreguntas();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado(){
 document.getElementById("palabraDescifrada").innerHTML = puntaje;

}


mostrarPreguntas();