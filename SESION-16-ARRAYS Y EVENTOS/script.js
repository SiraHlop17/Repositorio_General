//Variables

const diaSemana = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
]

const frutas = [
    'manzana',
    'platano',
    'pera',
    'uva',
    'ciruela',
]



//Salidas del Documento



//Funciones



document.getElementById('mostrar').addEventListener('click',function mostrar() {
    document.getElementById('arreglo1').innerHTML = diaSemana;

    document.getElementById('valor1').innerHTML = diaSemana[6];

    document.getElementById('frutas').innerHTML = frutas;

    document.getElementById('longitudfrutas').innerHTML = `Hay ` + frutas.length + ` frutas`
})