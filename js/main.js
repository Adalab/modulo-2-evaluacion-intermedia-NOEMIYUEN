'use strict';

const selectElement = document.querySelector ('.js-select');
const btnElement = document.querySelector('.js-btnBattle');
const userElement = document.querySelector ('.js-user');
const computerElement = document.querySelector('.js-computer');





//función nºaleatorio, rendonde hacia arriba
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

//función manejadora

function handleClick() {}
    
//funcion evento
btnElement.addEventListener('click', (handleClick));