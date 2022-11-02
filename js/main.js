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
let evelStrength = 0;

//Objeto equipo Sauron
const saruonTeam = {
    race: ['Sureño Malo','Orcos','Goblins','Huargos', 'Trolls'],
    strenght: [2,2,2,3,5]
  };


//función nºaleatorio, redondea hacia arriba (parte de 1)
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    };

//función incluir texto
function render (element1, resultText) {
  element1. innerHTML = resultText;
  };

//función asociar fuerza a numero random
function associateStrength (numb){
  if (numb<=3) {
    return evelStrength = 2;
  } else if (numb<5) {
    return evelStrength = 3;
  } else {return evelStrength = 5;}
};


//función batalla
function battle () {
    const selectUser = parseInt(selectElement.value);
    random = getRandomNumber(5);
    associateStrength (random);
    if (selectUser<evelStrength) {
      render(resultElement,lose);
      sauronPoints++
    }else if (selectUser>evelStrength){
      render(resultElement, win);
      userPoints++
    }else { render(resultElement, tie);}
  };

//función mostrar elección de saurons
function displaySauronElection (randomnumb){
  render (sauronChooseElement, `Sauron elige: ${saruonTeam.race[randomnumb-1]} 
  con fuerza ${saruonTeam.strenght[randomnumb-1]}`);
  };

//función para no contar si no se elije jugador
function dontCount (battle){
  if (selectElement.value==='default') {
    games--;
    render (sauronChooseElement, 'Selecciona raza');
    };
  };

//función manejadora
function handleClick(event) {
    event.preventDefault();
    battle ();
    games++;
    render(userElement,userPoints);
    render(computerElement,sauronPoints);
    displaySauronElection (random);
    dontCount ();
    End ();
    };
    
//función evento
btnElement.addEventListener('click', (handleClick));

//bonus

//función add/remove classList

function addClass (element,classCss) {
  element.classList.add (classCss);
  };

function removeClass (element,classCss) {
  element.classList.remove (classCss);
  };

//función maquetación Derrota
function displayfail() {
  removeClass (mainElement,'main');
  addClass (mainElement,'mainFail');
  render (endTextElement, '¡Derrota gana Sauron!')
  };

//función maquetación Vencedor
function displayWin() {
  removeClass (mainElement,'main');
  addClass (mainElement,'mainWin');
  removeClass (mainTitleElement,'mainTitle');
  addClass ( mainTitleElement,'mainTitleWin');
  addClass ( textGameElement,'transparent');
  render ( endTextElement, '¡Victoria! Sauron se retira.')
  };

function End ( ) {
  if (games >= 10) {
    render(resultElement, 'Fin del juego');
    removeClass (btnResetElement,'hide')
    addClass (btnElement,'hide');
    addClass (selectElement,'hide');
    render(sauronChooseElement, '');
    selectElement.value='default';
    if (userPoints<sauronPoints){
        displayfail();
      } else if (userPoints>sauronPoints){
        displayWin();
      } else {
       render(endTextElement, '¡Empate! Reune tus tropas.');
      }
    };
  };

function ringAnimation () {
  if (ringElement.classList.contains ('ring')) {
    removeClass (ringElement,'ring')
    addClass (ringElement,'ring2')
  
  }else {
    addClass (ringElement,'ring')
    removeClass (ringElement,'ring2')

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
  removeClass (selectElement,'hide');
}

function handleClickReset (event) {
  event.preventDefault();
  resetStyles ();
  games = 0;
  userPoints = 0;
  sauronPoints = 0;
  render(userElement,userPoints);
  render(computerElement,sauronPoints);
  ringAnimation ();
}

btnResetElement.addEventListener('click', handleClickReset);