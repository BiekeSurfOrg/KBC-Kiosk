let rows = 3;
let columns = 3;

let currTile;
let otherTile;

let turns = 0;

let gameWindow;

let shuffleButton;

let lastInteractedWith = Date.now();

const fiftyVariants = [];

const start = Date.now();

const timeOut = 120000;

const initialize = () => {
  generateVariants();
  chronJob();
  renderBoard();
  isComplete();
};

window.onload = initialize;

const chronJob = () => {
  setTimeout(() => {
    if (Date.now() - lastInteractedWith >= timeOut) {
      window.location.replace("../index.html");
    } else {
      chronJob();
    }
  }, 5000);
};

const renderBoard = () => {
  turns = 0;
  const variant = [...getVariant(fiftyVariants)];
  shuffleButton = document.getElementById("shuffle");
  gameWindow = document.getElementById("board");
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.id = r.toString() + "-" + c.toString();
      tile.src = variant.shift() + ".jpg";

      tile.addEventListener("touchstart", dragStart);
      tile.addEventListener("touchstart", interaction);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("touchend", dragDrop);
      shuffleButton.addEventListener("click", shuffleTiles);

      gameWindow.append(tile);
    }
  }
};

const interaction = () => {
  lastInteractedWith = Date.now();
};

const isSolvable = (array) => {
  let inv_count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === 0) {
        continue;
      }
      if (array[j] === 0) {
        continue;
      }
      if (array[i] > array[j]) inv_count++;
    }
  }
  return inv_count % 2 === 0;
};

const shuffleArray = () => {
  const array = [1, 2, 3, 4, 0, 6, 7, 8, 9];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateVariants = () => {
  while (fiftyVariants.length < 50) {
    const currentArray = shuffleArray();
    if (isSolvable(currentArray)) {
      fiftyVariants.push(currentArray);
    }
  }
};

const getVariant = (array) => {
  const variant = Math.floor(Math.random() * array.length);
  return array[variant];
};

function shuffleTiles() {
  gameWindow.innerHTML = "";
  document.getElementById("turns").innerText = "0";
  renderBoard();
}

function isComplete() {
  const tiles = gameWindow.children;
  let currentPoint = 1;
  for (let i = 0; i < tiles.length; i++) {
    const element = tiles[i];
    const tileNumber = element.attributes.src.nodeValue;
    if (currentPoint === 5) {
      if (!tileNumber.includes(0 + ".jpg")) {
        return false;
      }
      currentPoint++;
      continue;
    }
    if (!tileNumber.includes(currentPoint + ".jpg")) {
      return false;
    }
    currentPoint++;
  }
  return true;
}

function getElementFromPoint(x, y) {
  return document.elementFromPoint(x, y);
}

const addPreventZoomEventListener = () => {
  const body = document.body;
  body.addEventListener("touchstart", preventZoom);
  body.addEventListener("touchmove", preventZoom);
  body.addEventListener("touchend", preventZoom);
};

const preventZoom = (e) => {
  e.preventDefault()
  document.body.style.zoom = 1;
};

function dragStart(e) {
  e.preventDefault();
  document.body.style.zoom = 1;
  currTile = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}

function dragDrop(e) {
  const xCodrdinates = e.changedTouches[0].clientX;
  const yCordinates = e.changedTouches[0].clientY;
  otherTile = getElementFromPoint(xCodrdinates, yCordinates);
  dragEnd();
}

function dragEnd() {
  if (!otherTile.src.includes("0.jpg")) {
    return;
  }

  let currCoords = currTile.id.split("-");
  let r = parseInt(currCoords[0]);
  let c = parseInt(currCoords[1]);

  let otherCoords = otherTile.id.split("-");
  let r2 = parseInt(otherCoords[0]);
  let c2 = parseInt(otherCoords[1]);

  let moveLeft = r == r2 && c2 == c - 1;
  let moveRight = r == r2 && c2 == c + 1;

  let moveUp = c == c2 && r2 == r - 1;
  let moveDown = c == c2 && r2 == r + 1;

  let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

  if (isAdjacent) {
    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
  }
  if (isComplete()) {
    document.getElementById("1-1").src = "5-1.jpg";
  }
}
