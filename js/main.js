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

//función nºaleatorio, redondea hacia arriba (parte de 1)
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

//Incluir Cartel
function renderResult (resultText) {
  resultElement.innerHTML=resultText;
}

let random=0;
//función batalla
function battle () {
    const selectUser = selectElement.value;
    random = getRandomNumber(5);
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


//saurons election

function sauronElection (){
  if (random === 1) {
    sauronChooseElement.innerHTML = `Sauron elige: Sureños malos`;
  } else if (random === 2) {
    sauronChooseElement.innerHTML = `Sauron elige: Orcos`;
  } else if (random === 3) {
    sauronChooseElement.innerHTML = `Sauron elige: Goblins`;
  } else if (random === 4) {
    sauronChooseElement.innerHTML = `Sauron elige: Huargos`;
  } else {
    sauronChooseElement.innerHTML = `Sauron elige: Trolls`;
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
    End ();
}
    
//funcion evento
btnElement.addEventListener('click', (handleClick));

//bonus
let games = 0;
let userPoints = 0;
let sauronPoints = 0;



function userScore (scoreU) {
  userElement.innerHTML = scoreU;
}
function sauronScore (scorePc) {
  computerElement.innerHTML = scorePc;
}

function End ( ) {

  if (games >= 10) {
    renderResult ('Fin del juego')
    btnResetElement.classList.remove('hide');
    btnElement.classList.add('hide');
    sauronChooseElement.innerHTML = '';
    console.log ('fin');
    if (userPoints<sauronPoints){
      mainElement.classList.remove ('main');
      mainElement.classList.add ('mainFail');
      endTextElement.innerHTML='¡Derrota gana Sauron!';
    }
    if (userPoints>sauronPoints){
      mainElement.classList.remove ('main');
      mainElement.classList.add ('mainWin');
      endTextElement.innerHTML='¡Victoria! Sauron se retira.';
      mainTitleElement.classList.remove ('mainTitle');
      mainTitleElement.classList.add ('mainTitleWin');
      textGameElement.classList.add('transparent');
    }if (userPoints===sauronPoints) {
      endTextElement.innerHTML='¡Empate! Reune tus tropas.';
    }
  }
}

function handleClickReset (event) {
  event.preventDefault();
  userScore (0);
  sauronScore (0);
  btnResetElement.classList.add ('hide');
  btnElement.classList.remove('hide');
  games = 0;
  userPoints = 0;
  sauronPoints = 0;
  mainElement.classList.add ('main');
  mainElement.classList.remove ('mainFail');
  mainElement.classList.remove ('mainWin');
  endTextElement.innerHTML='';
  mainTitleElement.classList.add ('mainTitle');
    mainTitleElement.classList.remove  ('mainTitleWin');
    textGameElement.classList.remove ('transparent');
      if (ringElement.classList.contains ('ring')) {
        ringElement.classList.remove ('ring');
        ringElement.classList.add ('ring2');
      }else {
        ringElement.classList.add ('ring');
        ringElement.classList.remove('ring2');
      };
      

}

btnResetElement.addEventListener('click', (handleClickReset));
