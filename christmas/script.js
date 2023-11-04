const dayHead = document.getElementById("days")
const hourHead = document.getElementById("hours")
const minHead = document.getElementById("minutes")
const secondHead = document.getElementById("seconds")

const christmas  = "25 Dec 2023"

function getDate(){
    const christmasdate = new Date(christmas); 
    const date = new Date();

    const totalSeconds = (christmasdate - date) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dayHead.innerHTML = days
    hourHead.innerHTML = formatTime(hours)
    minHead.innerHTML = formatTime(mins)
    secondHead.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

getDate();

setInterval(getDate, 1000);