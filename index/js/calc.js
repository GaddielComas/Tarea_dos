
var res = 0;
var valor1;
var valor2;
var accion;

//llamadas
function init() {
  var result = document.getElementById("result");
  var sum = document.getElementById("sum");
  var rest = document.getElementById("rest");
  var mult = document.getElementById("mult");
  var div = document.getElementById("div");
  var igual = document.getElementById("igual");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
  var resetear = document.getElementById("resetear");
  var lastresult = document.getElementById("lastresult");
  var borrar = document.getElementById("borrar");

  lastresult.textContent = localStorage.getItem('123');
}

//botones

uno.onclick = function (e) {
  result.textContent = result.textContent + "1";
};
dos.onclick = function (e) {
  result.textContent = result.textContent + "2";
};
tres.onclick = function (e) {
  result.textContent = result.textContent + "3";
};
cuatro.onclick = function (e) {
  result.textContent = result.textContent + "4";
};
cinco.onclick = function (e) {
  result.textContent = result.textContent + "5";
};
seis.onclick = function (e) {
  result.textContent = result.textContent + "6";
};
siete.onclick = function (e) {
  result.textContent = result.textContent + "7";
};
ocho.onclick = function (e) {
  result.textContent = result.textContent + "8";
};
nueve.onclick = function (e) {
  result.textContent = result.textContent + "9";
};
cero.onclick = function (e) {
  result.textContent = result.textContent + "0";
};
resetear.onclick = function (e) {
  reset();
};
sum.onclick = function (e) {
  valor1 = result.textContent;
  accion = "+";
  limpiar();
};
rest.onclick = function (e) {
  valor1 = result.textContent;
  accion = "-";
  limpiar();
};
mult.onclick = function (e) {
  valor1 = result.textContent;
  accion = "*";
  limpiar();
};
div.onclick = function (e) {
  valor1 = result.textContent;
  accion = "/";
  limpiar();
};
igual.onclick = function (e) {
  valor2 = result.textContent;
  resolver();
};

borrar.onclick = function (e) {
  borrarh();

}




function limpiar() {
  result.textContent = "";
}
function reset() {
  result.textContent = "";
  valor1 = 0;
  valor2 = 0;
  accion = "";
  
 
}

function resolver() {
  
  
  switch (accion) {
    case "+":
      res = parseFloat(valor1) + parseFloat(valor2);
      break;
    case "-":
      res = parseFloat(valor1) - parseFloat(valor2);
      break;
    case "*":
      res = parseFloat(valor1) * parseFloat(valor2);
      break;
    case "/":
      res = parseFloat(valor1) / parseFloat(valor2);
      break;
  }
  reset();
  result.textContent = res;
  historial();
  
}

function historial(){

  localStorage.setItem('123',res);
  lastresult.textContent = localStorage.getItem('123');

}
function borrarh(){
  localStorage.removeItem('123');
  lastresult.textContent = "No hay ultimo resultado"
}