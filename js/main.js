'use strict';

const selectElement = document.querySelector ('.js-select');
const btnElement = document.querySelector('.js-btnBattle');
const resultElement = document.querySelector('.js-result');
const userElement = document.querySelector ('.js-user');
const computerElement = document.querySelector('.js-computer');
const btnResetElement = document.querySelector ('.js-btnReset');
const mainElement  = document.querySelector ('.js-main');
const endTextElement = document.querySelector('.js-end');
const mainTitleElement = document.querySelector('.js-mainTitle');
const ringElement = document.querySelector ('.js-ring');
const textGameElement = document.querySelector('.js-textGame');
const sauronChooseElement = document.querySelector ('.js-sauronChoose');


const lose  = '¡Ha ganado el Ejército del Mal! Vuelve a Intentarlo!';
const win = '¡Ha ganado el Ejército del Bien! Enhorabuena!';
const tie = '¡Empate!'

let random=0;
let games = 0;
let userPoints = 0;
let sauronPoints = 0;


//función nºaleatorio, redondea hacia arriba (parte de 1)
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

//Incluir texto

function render (element1, resultText) {
  element1. innerHTML = resultText;
}
/* function renderResult (resultText) {
  resultElement.innerHTML=resultText;
}
 */

//función batalla
function battle () {
    const selectUser = selectElement.value;
    random = getRandomNumber(5);
    console.log (random);
    if (parseInt(selectElement.value)===1) {
      render(resultElement,lose);
      sauronPoints++
    }

    if (parseInt(selectElement.value)===2 && random >3) {
      render(resultElement,lose);
      sauronPoints++
      } 
    if (parseInt(selectElement.value)===2 && random <=3) {
      render(resultElement, tie);
    } 

   if (parseInt(selectElement.value)===3 && random <4) {
      render(resultElement, win);
      userPoints++
    } 
    if (parseInt(selectElement.value)===3 && random ===4) {
      render(resultElement, tie);
    }
    if (parseInt(selectElement.value)===3 && random >4) {
      render(resultElement,lose);
      sauronPoints++
    } 
 
   if (parseInt(selectElement.value)===4 && random <5) {
    render(resultElement, win);
    userPoints++
    } 
  if (parseInt(selectElement.value)===4 && random ===5) {
    render(resultElement,lose);
    sauronPoints++
    } 

    if (parseInt(selectElement.value)===5 && random <5) {
      render(resultElement, win);
      userPoints++
      } 
    if (parseInt(selectElement.value)===5 && random ===5) {
      render(resultElement, tie);
      } 
} 


//saurons election

function sauronElection (){
  if (random === 1) {
    render (sauronChooseElement, `Sauron elige: Sureños malos`);
  } else if (random === 2) {
    render (sauronChooseElement, `Sauron elige: Orcos`);
  } else if (random === 3) {
    render (sauronChooseElement, `Sauron elige: Goblins`);
  } else if (random === 4) {
    render (sauronChooseElement, `Sauron elige: Huargos`);
  } else {
    render (sauronChooseElement, `Sauron elige: Trolls`);
  } 
}

//funciones puntuación
function userScore (scoreU) {
  userElement.innerHTML = scoreU;
}
function sauronScore (scorePc) {
  computerElement.innerHTML = scorePc;
}

//función para no contar si no se elije jugador

function dontCount (battle){
  if (parseInt(selectElement.value)===0) {
    games--;
    render (sauronChooseElement, 'Selecciona raza');
  }
}

//función manejadora

function handleClick(event) {
  event.preventDefault();
    battle ();
    games++;
    userScore (userPoints);
    sauronScore (sauronPoints);
    sauronElection ();
    dontCount ();
    End ();
}
    
//función evento
btnElement.addEventListener('click', (handleClick));

//bonus

//función add/remove classList

function addClass (element,classCss) {
  element.classList.add (classCss);
}
function removeClass (element,classCss) {
  element.classList.remove (classCss);
}

//función maquetación Derrota
function faildisplay() {
  removeClass (mainElement,'main');
  addClass (mainElement,'mainFail');
  render (endTextElement, '¡Derrota gana Sauron!')
}

//función maquetación Vencedor
function winDisplay() {
  removeClass (mainElement,'main');
  addClass (mainElement,'mainWin');
  removeClass (mainTitleElement,'mainTitle');
  addClass ( mainTitleElement,'mainTitleWin');
  addClass ( textGameElement,'transparent');
  render ( endTextElement, '¡Victoria! Sauron se retira.')
}

function End ( ) {
  if (games >= 10) {
    render(resultElement, 'Fin del juego');
    removeClass (btnResetElement,'hide')
    addClass (btnElement,'hide');
    sauronChooseElement.innerHTML = '';
    if (userPoints<sauronPoints){
      faildisplay();
    }
    if (userPoints>sauronPoints){
      winDisplay();
    }if (userPoints===sauronPoints) {
      render(endTextElement, '¡Empate! Reune tus tropas.');
    }
  }
}
function ringAnimation () {
  if (ringElement.classList.contains ('ring')) {
    ringElement.classList.remove ('ring');
    ringElement.classList.add ('ring2');
  }else {
    ringElement.classList.add ('ring');
    ringElement.classList.remove('ring2');
  };  
}

function resetStyles () {
  render(resultElement, '¡Comienza la batalla!');
  addClass (btnResetElement,'hide');
  removeClass (btnElement,'hide')
  addClass (mainElement,'main');
  removeClass (mainElement,'mainFail');
  removeClass (mainElement,'mainWin');
  render(endTextElement, '');
  addClass (mainTitleElement,'mainTitle');
  removeClass (mainTitleElement,'mainTitleWin');
  removeClass (textGameElement,'transparent');
}

function handleClickReset (event) {
  event.preventDefault();
  resetStyles ();
  games = 0;
  userPoints = 0;
  sauronPoints = 0;
  userScore (0);
  sauronScore (0);
  ringAnimation ();
}

btnResetElement.addEventListener('click', (handleClickReset));
