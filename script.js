'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const check = document.querySelector('.js-check');
const displayMssg = function (mssg) {
  document.querySelector('.js-message').textContent = mssg;
};
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.js-guess').value);

  if (!guess) {
    displayMssg('⛔ No Number!');
    //when player wins
  } else if (guess === secretNumber) {
    displayMssg('🎉 Correct number!');
    document.querySelector('.js-number').textContent = secretNumber;
    document.querySelector('.js-body').style.backgroundColor = '#60b347';
    document.querySelector('.js-number').style.width = '30rem';
    //highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.js-highscore').textContent = highscore;
    }
    //when guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMssg('📈 Too high!');
      score--;
      document.querySelector('.js-score').textContent = score;
    } else {
      displayMssg('❌ You lost the game');
      document.querySelector('.js-score').textContent = 0;
    }
    //when guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMssg('📉 Too low!');
      score--;
      document.querySelector('.js-score').textContent = score;
    } else {
      displayMssg('❌ You lost the game');
      document.querySelector('.js-score').textContent = 0;
    }
  }
});

const againBtn = document.querySelector('.js-again');
againBtn.addEventListener('click', handleRestore);

function handleRestore() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMssg('Start guessing...');
  document.querySelector('.js-score').textContent = score;
  document.querySelector('.js-number').textContent = '?';
  document.querySelector('.js-guess').value = '';
  document.querySelector('.js-body').style.backgroundColor = '#222';
  document.querySelector('.js-number').style.width = '15rem';
}
