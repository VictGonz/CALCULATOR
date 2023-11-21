/*DEFINICIÓN BOTONES Y RESULTADOS*/
const buttons = document.querySelector('button')
const result =  document.querySelector('result')

buttons.addEventListener('click'),e => {
}
if (e.target.matches('button')){

}

/*ESTABLECER EVENTO AL CLICKAR BOTÓN*/ 
const button = e.target
const action = button.dataset.action
const buttonContent = button.textContent
const display = document.querySelector('resultDisplay')

if (!action) {
  if (displayedNum === '0') {

  }}
    display.textContent = keyContent
    if (!action) {
      if (displayedNum === '0') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
    }