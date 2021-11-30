'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--old');

score0El.textContent = 0 ;
score1El.textContent = 0 ;
diceEl.classList.add('hidden')

let currentScore = 0 ;

//rolling dice function
btnRoll.addEventListener("click" , function(){
  //generate a random dice roll
  const dice = Math.trunc(Math.random() * 6 ) + 1;
  console.log(dice);

  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //check for rolled
  if(dice != 1 ){
    //add diceto current score
    currentScore = currentScore + dice ;
    current0El.textContent = currentScore;
  } else {
    //switch to next Player
    currentScore = 0;
    current0El.textContent = 0;
    currentScore += dice;
    current1El.textContent = currentScore;
  }

});
