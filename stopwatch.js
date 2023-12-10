let timer;
let isRunning = false;
let startTime;
let lapCount = 1;

function startPause() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startPause").innerHTML = "Start";
    } else {
        startTime = new Date() - (lapCount > 1 ? lapCount - 1 : 0) * 1000;
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startPause").innerHTML = "Pause";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("startPause").innerHTML = "Start";
	
	//document.getElementById("start").innerHTML = "Start"
	//document.getElementById("Pause").innerHTML = "pause"
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("lapList").innerHTML = "";
    lapCount = 1;
}

function lap() {
    if (isRunning) {
        const lapTime = new Date() - startTime;
        const formattedTime = formatTime(lapTime / 1000);
        const lapItem = document.createElement("li");
        lapItem.innerHTML = `Lap ${lapCount++}: ${formattedTime}`;
        document.getElementById("lapList").appendChild(lapItem);
    }
}

function updateDisplay() {
    const elapsedTime = new Date() - startTime;
    const formattedTime = formatTime(elapsedTime / 1000);
    document.getElementById("display").innerHTML = formattedTime;
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return (
        (hours < 10 ? "0" : "") +
        hours +
        ":" +
        (minutes < 10 ? "0" : "") +
        minutes +
        ":" +
        (secs < 10 ? "0" : "") +
        secs
    );
}
