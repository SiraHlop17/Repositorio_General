function multiplicar(num1, num2) {
    result = num1 * num2;
    return result;
}

var result = multiplicar(2, 7);
console.log(result)



var result2 = multiplicar(47, 31);
console.log(result2)

//elevar un numero 

function elevar(num1, num2) {
    resultd = num1 ** num2;
    return resultd;
}

var resultd = elevar(2, 5)
console.log(resultd);

//Calcular descuento de un Producto

function precioFinal(costo, descuento) {

    montoFinal = costo - ((costo * descuento) / 100)
    return montoFinal

}

var montoFinal = precioFinal(180, 20)
console.log(montoFinal)







