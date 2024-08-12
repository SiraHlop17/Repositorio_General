//Estructura Switch Case

var clima = "nublado"


switch (clima) {

    case 'lluvioso':
        console.log('Recuerda llevar un paragua');
        break;

    case 'soleado':
        console.log('Viste ligero');
        break;

    case 'nublado':
        console.log('Sal a la calle');
        break;

    default:
        console.log('Tipo de clima desconocido');
        break;
}

/*Si la fruta es manzana el precio es de S/. 5,
 si la fruta es platano el precio es de S/. 2, 
 si la fruta es mago el precio es de S/. 4
 si es cualquier otra fruta no se tiene esta fruta*/

var fruta = 'manzana';

switch (fruta) {

    case 'manzana':
        console.log('S/. 5.00');
        break;

    case 'platano':
        console.log('S/.2.00');
        break;

    case ' mango':
        console.log('S/.4.00');
        break;

    default:
        console.log('no se tinee esa fruta');
        break;
}

var diasemana = 'martes';

switch (diasemana) {

    case 'lunes':
        console.log('Hoy es Lunes');
        break;

    case 'martes':
        console.log('Hoy es martes');
        break;

    case 'miercoles':
        console.log('Hoy es miercoles');
        break;

    case 'jueves':
        console.log('Hoy es jueves');
        break;

    default:
        console.log('Hoy es viernes');
        break;

}