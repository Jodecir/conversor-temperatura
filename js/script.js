function ConvertInput() {
  //entrada
  var c = parseInt(document.getElementById("c").value);
  var f = parseInt(document.getElementById("f").value);
  //processamento
  var ftoc = (c * 1.8) + 32;
  var ctof = (f - 32) / 1.8;
  //saída
  document.getElementById('c').value = ctof
  document.getElementById('f').value = ftoc
}