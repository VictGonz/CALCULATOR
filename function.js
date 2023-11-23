

function printNumber() {

var opA;
var opB;
var operation;
let resultDisplay=document.querySelector('Display');
let n1= document.getElementById('n1');
let n2 = document.getElementById('n2');
let n3 = document.getElementById('n3');
let n4 = document.getElementById('n4');
let n5 = document.getElementById('n5');
let n6 = document.getElementById('n6');
let n7 = document.getElementById('n7');
let n8 = document.getElementById('n8');
let n9 = document.getElementById('n9');
let n0 = document.getElementById('n0');
let equal= document.getElementById('equal')
let plus= document.getElementById('plus')
let minus= document.getElementById('minus')
let division = document.getElementById('divide')
let multiplication= document.getElementById('multiply')
let reset= document.getElementById('clear');


n1.onclick=function(e){
  resultDisplay= resultDisplay + "1";
}
n2.onclick=function(e){
  resultDisplay= resultDisplay + "2";
}

n3.onclick=function(e){
  resultDisplay= resultDisplay + "3";
}
n4.onclick=function(e){
  resultDisplay= resultDisplay + "4";
}
n5.onclick=function(e){
  resultDisplay= resultDisplay + "5";
}
n6.onclick=function(e){
  resultDisplay= resultDisplay + "6";
}
n7.onclick=function(e){
  resultDisplay= resultDisplay + "7";
}
n8.onclick=function(e){
  resultDisplay= resultDisplay + "8";
}
n9.onclick=function(e){
  resultDisplay= resultDisplay + "9";
}
n0.onclick=function(e){
  resultDisplay.textContent= resultDisplay + "0";
}

reset.onclick= function(e){
  reseting();
}
plus.onclick = function(e){
 opA = resultDisplay.textContent;
  operation = "+";
  clean();
}
minus.onclick = function(e){
  opA = resultDisplay.textContent;
  operation = "-";
  clean();
}
multiplication.onclick = function(e){
 opA = resultDisplay.textContent;
  operation = "*";
  clean();
}
division.onclick = function(e){
 opA = resultDisplay.textContent;
  operation = "/";
  clean();
}
equal.onclick = function(e){
  opB = resultDisplay.textContent;
  solve();
}

function clean(){
  resultDisplay.textContent= "";

}

function reseting(){
  resultDisplay.textContent="";
  opA= "0";
  opB= "0";
  operation= "";
}

function solve(){
  var final= 0;
  switch(operation){
    case "+" :
    final= parseFloat(opA) + parseFloat(opB);
    break;
    case "-":
    final= parseFloat(opA) - parseFloat(opB);
    break;
    case "*":
    final= parseFloat(opA) * parseFloat(opB);
    break;
    case "/":
    final= parseFloat(opA) / parseFloat(opB);
    break; 
  function reseting(){
    result.textContent= final;
  }}

  }}