const containerEl = document.querySelector('.container');

function createColorItems() {
  for (let i = 0; i < 30; i++) {
    const colorItems = document.createElement('div');
    colorItems.classList.add('color-items');
    containerEl.appendChild(colorItems);
  }
}

function randomColor() {
  const hexadecimal = '0123456789abcdef';
  const colorLength = 6;
  let color = '';

  for (let i = 0; i < colorLength; i++) {
    const randomNum = Math.floor(Math.random() * hexadecimal.length);
    color += hexadecimal.substring(randomNum, randomNum + 1);
  }
  return color;
}

function generateColor() {
  document.querySelectorAll('.color-items').forEach((item) => {
    const newColorCode = randomColor();
    item.innerText = '#' + newColorCode;
    item.style.backgroundColor = '#' + newColorCode;
  });
}

createColorItems();
generateColor();
