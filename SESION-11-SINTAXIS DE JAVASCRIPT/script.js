//recordar como crear variables del tipo string
var lenguaje = 'phyton';
console.log(lenguaje)

var numero = 45;
console.log(numero)

document.write(lenguaje)

function mostrar() {
    var Nombre = document.getElementById("Nombre").value;
    var Apellido = document.getElementById("Apellidos").value;
    var Fecha = document.getElementById("Fecha").value;
    var Sexo = document.getElementById("Sexo").Selected;

    console.log(Nombre + "\n" + Apellido + "\n" + Fecha + "\n" + Sexo);
}
