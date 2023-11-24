
  let opA;
  let opB;
  let operation;
  let resultDisplay = document.getElementById('result');
  let one = document.getElementById('n1');
  let two = document.getElementById('n2');
  let three = document.getElementById('n3');
  let four = document.getElementById('n4');
  let five = document.getElementById('n5');
  let six = document.getElementById('n6');
  let seven = document.getElementById('n7');
  let eight = document.getElementById('n8');
  let nine = document.getElementById('n9');
  let zero = document.getElementById('n0');
  let equal= document.getElementById('equal')
  let plus= document.getElementById('plus')
  let minus= document.getElementById('minus')
  let division = document.getElementById('divide')
  let multiplication= document.getElementById('multiply')
  let reset= document.getElementById('clear');
  let buttons= document.querySelectorAll(".button");
  console.log(buttons)
  let buttonValue;


buttons.forEach(button =>{
 button.addEventListener("click",printNumber)
 buttonValue= printNumber.target
 printNumber.target= Math.floor(printNumber.target)
 console.log(typeof buttonValue)
}) 
/*

one.addEventListener("click",printNumber);
two.addEventListener("click",printNumber);
three.addEventListener("click",printNumber);
four.addEventListener("click",printNumber);
five.addEventListener("click",printNumber);
six.addEventListener("click",printNumber);
seven.addEventListener("click",printNumber);
eight.addEventListener("click",printNumber);
nine.addEventListener("click",printNumber);
zero.addEventListener("click",printNumber);
*/
  function printNumber(){
    
    console.log("funciona")
    let resultDisplay = printNumber.target
   var resultElement = document.getElementById(".result") ;
   let numberDisplay = resultElement + resultDisplay;
   numberDisplay.innerHTML
   console.log(typeof resultElement)
   console.log( resultElement)
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
    }
  }};
