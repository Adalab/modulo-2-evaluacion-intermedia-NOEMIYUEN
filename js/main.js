'use strict';

const selectElement = document.querySelector ('.js-select');
const btnElement = document.querySelector('.js-btnBattle');
const resultElement = document.querySelector('.js-result');
const userElement = document.querySelector ('.js-user');
const computerElement = document.querySelector('.js-computer');


const lose  = '¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo!';
const win = '¡Ha ganado el Ejército del Bien! Enhorabuena!';
const tie = '¡Empate!'

//función nºaleatorio, redondea hacia arriba (parte de 1)
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

//Incluir Cartel
function renderResult (resultText) {
  resultElement.innerHTML=resultText;
}

//función batalla
function battle () {
    const selectUser = selectElement.value;
    const random = getRandomNumber(5);
    console.log (random);
    if (parseInt(selectElement.value)===1) {
      renderResult(lose);
      sauronPoints++
    }


    if (parseInt(selectElement.value)===2 && random >3) {
      renderResult(lose);
      sauronPoints++
      } 
    if (parseInt(selectElement.value)===2 && random <=3) {
      renderResult(tie);
    } 


   if (parseInt(selectElement.value)===3 && random <4) {
      renderResult(win);
      userPoints++
    } 
    if (parseInt(selectElement.value)===3 && random ===4) {
      renderResult(tie);
    }
    if (parseInt(selectElement.value)===3 && random >4) {
      renderResult(lose);
      sauronPoints++
    } 
 

   if (parseInt(selectElement.value)===4 && random <5) {
    renderResult(win);
    userPoints++
    } 
  if (parseInt(selectElement.value)===4 && random ===5) {
    renderResult(lose);
    sauronPoints++
    } 

    if (parseInt(selectElement.value)===5 && random <5) {
      renderResult(win);
      userPoints++
      } 
    if (parseInt(selectElement.value)===5 && random ===5) {
      renderResult(tie);
      } 
} 





//función manejadora

function handleClick(event) {
  event.preventDefault();
    battle ();
    games++;
    userScore ();
    sauronScore ();
    End ();
}
    
//funcion evento
btnElement.addEventListener('click', (handleClick));

//bonus
let games = 0;
let userPoints = 0;
let sauronPoints = 0;


function userScore () {
  userElement.innerHTML = userPoints;
}
function sauronScore () {
  computerElement.innerHTML = sauronPoints;
}

function End () {

  if (games >= 10) {
    renderResult ('End')
  }
}
