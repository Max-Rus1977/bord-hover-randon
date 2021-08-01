const board = document.querySelector('#board');

const SQUERS_NUMBER = 450;

for (let i = 0; i < SQUERS_NUMBER; i++) {
  const squaere = document.createElement('div');
  squaere.classList.add('squaer');

  squaere.addEventListener('mouseover', () => setColor(squaere))
  squaere.addEventListener('mouseleave', () => removeColor(squaere))

  board.append(squaere);
}

function setColor(element) {
  element.style.backgroundColor = 'red';
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
}