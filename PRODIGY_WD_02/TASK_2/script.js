let startTime;
let stopwatchInterval;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        startTime = new Date().getTime();
        stopwatchInterval = setInterval(updateDisplay, 1000);
        isRunning = true;
    }
}

function stopStopwatch() {
    if (isRunning) {
        clearInterval(stopwatchInterval);
        isRunning = false;
    }
}

function resetStopwatch() {
    stopStopwatch();
    document.querySelector('.display').textContent = '00:00:00';
    isRunning = false;
}


function updateDisplay() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.querySelector('.display').textContent = formattedTime;
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const hours = Math.floor(minutes / 60);
    const formattedMinutes = padNumber(minutes % 60);
    const formattedSeconds = padNumber(seconds);
    const formattedHours = padNumber(hours);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function padNumber(num) {
    return num.toString().padStart(2, '0');
}
