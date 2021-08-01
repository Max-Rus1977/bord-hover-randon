const board = document.querySelector('#board');

const colors = ['#d33e9e', '#8e44ad', '#74b8e5', '#d9ac83', '#2ecc71', '#cd1c1c'];

const SQUERS_NUMBER = 600;

for (let i = 0; i < SQUERS_NUMBER; i++) {
  const squaere = document.createElement('div');
  squaere.classList.add('squaer');

  squaere.addEventListener('mouseover', () => setColor(squaere))
  squaere.addEventListener('mouseleave', () => removeColor(squaere))

  board.append(squaere);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #1d1d1d';
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}