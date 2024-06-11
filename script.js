'use strict';

// select
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const activePlayer0 = document.getElementById('current--0');
const activePlayer1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let score, currentScore, currentPlayer, play;

const zero = function () {
    score = [0, 0];
    currentScore = 0;
    currentPlayer = 0;
    play = true;
    currentScore = 0;
    currentPlayer = 0;
    play = true;
    score0.textContent = 0;
    score1.textContent = 0;
    activePlayer0.textContent = 0;
    activePlayer1.textContent = 0;
    dice.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}
zero();

// dice
const switchPlayer = function () {
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentScore = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
    if (play) {
        dice.classList.remove('hidden');
        const roll = Math.trunc(Math.random() * 6) + 1;
        dice.src = `dice-${roll}.png`;
        if (roll !== 1) {
            currentScore += roll;
            document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

// hold
btnHold.addEventListener('click', function () {
    if (play) {
        score[currentPlayer] += currentScore;
        document.getElementById(`score--${currentPlayer}`).textContent = score[currentPlayer];
        if (score[currentPlayer] >= 100) {
            play = false;
            document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
            dice.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }
});

// reset
btnNew.addEventListener('click', zero);