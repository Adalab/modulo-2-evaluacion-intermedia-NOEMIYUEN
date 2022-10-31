'use strict';

const selectElement = document.querySelector ('.js-select');
const btnElement = document.querySelector('.js-btnBattle');
const resultElement = document.querySelector('.js-result');
const userElement = document.querySelector ('.js-user');
const computerElement = document.querySelector('.js-computer');


/* 
Raza 1: Pelosos con fuerza (1),
Raza 2: Sureños buenos con fuerza (2),
Raza 3: Enanos con fuerza (3),
Raza 4: Númenóreanos con fuerza (4),
Raza 5: Elfos con fuerza (5).
Razas malvadas:
Raza 1: Sureños malos con fuerza (2),
Raza 2: Orcos con fuerza (2),
Raza 3: Goblins con fuerza (2),
Raza 4: Huargos con fuerza (3),
Raza 5: Trolls con fuerza(5)

 */
//función nºaleatorio, redondea hacia arriba (parte de 1)
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

//Incluir carter
function renderResult (resultText) {
  resultElement.innerHTML=resultText;
}

const lose  = '¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo!';
const win = '¡Ha ganado el Ejército del Bien! Enhorabuena!';
const tie = '¡Empate!'
/* renderResult('Ha ganado el Ejército del Mal! Vuelve a Intentarlo.') */


//función batalla
function battle () {
    const selectUser = selectElement.value;
    const random = getRandomNumber(5);
    console.log (random);
    if (parseInt(selectElement.value)===1) {
      renderResult(lose);
    }


    if (parseInt(selectElement.value)===2 && random >3) {
      renderResult(lose);
      } 
    if (parseInt(selectElement.value)===2 && random <=3) {
      renderResult(tie);
    } 


   if (parseInt(selectElement.value)===3 && random <4) {
      renderResult(win);
    } 
    if (parseInt(selectElement.value)===3 && random ===4) {
      renderResult(tie);
    }
    if (parseInt(selectElement.value)===3 && random >4) {
      renderResult(lose);
    } 

    
   if (parseInt(selectElement.value)===4 && random <5) {
    renderResult(win);
    } 
  if (parseInt(selectElement.value)===4 && random ===5) {
    renderResult(lose);
    } 

    if (parseInt(selectElement.value)===5 && random <5) {
      renderResult(win);
      } 
    if (parseInt(selectElement.value)===5 && random ===5) {
      renderResult(tie);
      } 
} 



//función manejadora

function handleClick(event) {
  event.preventDefault();
    battle ();

}
    
//funcion evento
btnElement.addEventListener('click', (handleClick));
