//Variables
const preguntas = [
    '¿Con qué frecuencia realizas deporte? <br> Considera como deporte cualqueir actvidad que acelere tu ritmo cardiaco, como caminar rápido, andar en bicicleta, bailar o, por supuesto, practicar un deporte',
    '¿Cuánto vasos de agua (200ml) bebes al día? <br> No consideres la ingesta de otros líquidos, como gaseosas, jugos azucarados o alcohol',
    '¿Cuántas porciones frutas y verduras consumes diariamente?',

]
const opciones = [
    ['3 ó más veces a la semana',
        'Al menos 4 veces a la semana',
        '2 a 3 veces al mes'],
    ['Al menos 8 vasos al día',
        'Entre 5 y 8, depende del día',
        'Cuando me acuerdo'],
    ['5 o más',
        "2 a 4",
        'Al menos 1 vez al día'],


]

const clave = [
    [5, 4, 3],
    [5, 4, 2],
    [5, 4, 3],
]

/*console.log( preguntas[0])
console.log( opciones [0][0])*/

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

function mostrarPreguntas() {
    document.getElementById('pregunta').innerHTML = preguntas[i];
    document.getElementById('op1').innerHTML = opciones[i][0];
    document.getElementById('op2').innerHTML = opciones[i][1];
    document.getElementById('op3').innerHTML = opciones[i][2];

}

function actualizarPuntaje(valor) {
    puntaje = clave[indicePregunta][valor] + puntaje;

    indicePregunta = indicePregunta + 1;
    if (preguntas.length > indicePregunta) {
        mostrarPreguntas();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById("titulo").innerHTML = 'Resultado'
    document.getElementById('contenido').innerHTML = `
    <pclass = 'resultado'> Tu puntaje es de : ${puntaje}</p>`;

}

mostrarPreguntas();

//Cronometro

var intervalo;

function iniciarCronometro() {
    var duracion = 15;
    var cronometro = document.getElementById('cronometro');
    iniciarTiempo(duracion, cronometro);

}
function iniciarTiempo(tiempo, elemento) {
    intervalo = setInterval(() => {
    if (tiempo == 0){
        clearInterval(intervalo);
    i = i +1
    mostrarPregunta();
    }
    else {
      tiempo = tiempo - 1;
      elemento.textContent = "00:" + tiempo;
    }
    }, 1000);
}

mostrarPregunta();