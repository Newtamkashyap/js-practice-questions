let intervalInput = document.getElementById('intervalInput');
let playArea = document.getElementById('playArea');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');
let reactionTable = document.getElementById('reactionTable');

let pixel = document.createElement('div');
pixel.classList.add('pixel');
let interval = null;
let isPaused = false;
let clickCount = 0;
let lastTime = 0;

function getRandomPosition() {
    const x = Math.floor(Math.random() * (playArea.offsetWidth - 10));
    const y = Math.floor(Math.random() * (playArea.offsetHeight - 10));
    return { x, y };
}

function movePixel() {
    const { x, y } = getRandomPosition();
    pixel.style.left = `${x}px`;
    pixel.style.top = `${y}px`;
}

function startGame() {
    if (interval) return; // Prevent multiple intervals
    lastTime = performance.now();
    movePixel();
    playArea.appendChild(pixel);

    interval = setInterval(() => {
        if (!isPaused) {
            movePixel();
        }
    }, intervalInput.value * 1000);
}

function pauseGame() {
    isPaused = !isPaused;
}

function resetGame() {
    clearInterval(interval);
    interval = null;
    isPaused = false;
    clickCount = 0;
    reactionTable.innerHTML = '';
    playArea.removeChild(pixel);
}

function recordReaction() {
    clickCount++;
    let currentTime = performance.now();
    let reactionTime = (currentTime - lastTime) / 1000; // convert to seconds
    lastTime = currentTime;

    let newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${clickCount}</td><td>${reactionTime.toFixed(2)}s</td>`;
    reactionTable.appendChild(newRow);

    movePixel(); // Move the pixel to a new position
}

// Event Listeners
startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', pauseGame);
resetBtn.addEventListener('click', resetGame);
pixel.addEventListener('click', recordReaction);
