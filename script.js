// Gerando as cores da paleta
const paleta = document.getElementById('color-palette');
const pixelPaleta = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const cleanButton = document.getElementById('clear-board');
const vqvButton = document.getElementById('generate-board');
const nPixLine = document.getElementById('board-size');
const colors = ['black', 'blue', 'green', 'yellow'];

function selectNewColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].style.backgroundColor = 'white';
  }
}

function setPaleteColors(colorsList) {
  for (let pixel = 0; pixel < pixelPaleta.length; pixel += 1) {
    pixelPaleta[pixel].style.backgroundColor = colorsList[pixel];
  }
}

// Gerando pixel-board

function genBoardElement(className, idx) {
  const boardElement = document.createElement('button');
  boardElement.setAttribute('class', className);
  boardElement.setAttribute('id', idx);
  return boardElement;
}

function genPixels(numberPix) {
  const pixels = [];
  for (let pixel = 0; pixel < numberPix; pixel += 1) {
    const pix = genBoardElement('pixel', `pixel-${pixel + 1}`);
    pixels.push(pix);
  }
  return pixels;
}

function populateBoard(pixels, elemento) {
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    elemento.appendChild(pixels[pixel]);
  }
}

function createBoard (nPixLine) {
  pixelBoard.innerHTML = null;
  const pixels = genPixels(nPixLine * nPixLine);
  populateBoard(pixels, pixelBoard);
  pixelBoard.style.width = `${nPixLine * 42}px`;
}

// Eventos
window.addEventListener('load', function () {
  createBoard(5);
});
vqvButton.onclick= createBoard(nPixLine.value);
window.addEventListener('load', setPaleteColors(colors));
cleanButton.onclick = clearBoard;
paleta.addEventListener('click', function (event) {
   if (event.target.classList.contains('color')) {
     selectNewColor}});
pixelBoard.addEventListener('click', function (event) {
  const selectedColor = document.querySelector('.selected');
  event.target.style.backgroundColor = selectedColor.style.backgroundColor;
});
