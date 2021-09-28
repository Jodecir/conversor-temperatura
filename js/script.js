//entrada
var c = prompt("Qual é a temperatura em c");
var f = prompt("Qual é a temperatura em c");
//processamento
var ftoc = (c * 1.8) + 32;
var ctof = (f - 32) / 1.8;
//saída
alert("A temp. em C é " + ctof + "°");
alert("A temperatura em F é " + ftoc + "°");