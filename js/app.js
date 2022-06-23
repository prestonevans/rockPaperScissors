const userDisplayScore = document.querySelector('[data-userScore]');
const computerDisplayScore = document.querySelector('[data-computerScore]');
const messageDisplay = document.querySelector('[data-messageDisplay');
const iconDisplay = document.querySelector('[data-items]');
const iconClassNames = {
  rock: 'fa-solid fa-hand-fist',
  paper: 'fa-solid fa-hand',
  scissors: 'fa-solid fa-hand-scissors',
};
const winningPairs = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

const TIMEOUT = 700 * 3;

let userScore = 0;
let computerScore = 0;
let userItem;
let computerItem;
let timeoutId;

userDisplayScore.innerText = userScore;
computerDisplayScore.innerText = computerScore;

function rockPaperScissors(item) {
  iconDisplay.innerHTML = `
    <i class="${iconClassNames['rock']}"></i>
    <i class="${iconClassNames['rock']}"></i>
    `;

  const userIcon = document.querySelectorAll('i')[0];
  const computerIcon = document.querySelectorAll('i')[1];
  const items = ['rock', 'paper', 'scissors'];

  clearTimeout(timeoutId);
  messageDisplay.innerText = '';
  computerItem = items[Math.floor(Math.random() * 3)];
  userItem = item;

  if (userItem === 'random') {
    userItem = items[Math.floor(Math.random() * 3)];
  }

  userIcon.classList.add('animation');
  computerIcon.classList.add('animation');

  determineWinner();
}

function reset() {
  userScore = 0;
  computerScore = 0;

  userDisplayScore.innerText = userScore;
  computerDisplayScore.innerText = computerScore;
  messageDisplay.innerText = '';
  iconDisplay.innerHTML = `
    <i class="${iconClassNames['rock']}"></i>
    <i class="${iconClassNames['rock']}"></i>
    `;
}

function determineWinner() {
  timeoutId = setTimeout(() => {
    iconDisplay.innerHTML = `
    <i class="${iconClassNames[userItem]}"></i>
    <i class="${iconClassNames[computerItem]}"></i>
    `;

    if (computerItem === userItem) {
      messageDisplay.innerText = "Draw";
      return;
    }

    if (winningPairs[userItem] === computerItem) {
      userDisplayScore.innerText = ++userScore;
      messageDisplay.innerText = `You won`;
      return;
    }

    computerDisplayScore.innerText = ++computerScore;
    messageDisplay.innerText = `You lost`;
  }, TIMEOUT);
}