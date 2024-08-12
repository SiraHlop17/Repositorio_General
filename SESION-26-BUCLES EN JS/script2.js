var frase = "Esta es la locate, que esta en locate24";
var expreg = /locate[0-9]/
var index = frase.search(expreg);
document.getElementById("demo").innerHTML = index;