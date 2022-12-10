const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

// GET THE CURRENT TIME
function getTime() {
    const time = new Date();
    const sec = time.getSeconds();
    const min = time.getMinutes();
    const hr = time.getHours();
    const singleMove = 6;//  Arm moves by ((360/4)/3)/5 = 6 degree

    // DYNAMICALLY SHOWING THE CURRENT TIME IN THE ANALOG CLOCK
    second.style.transform = `rotate(${singleMove*sec}deg)`;
    minute.style.transform = `rotate(${singleMove*min + sec/10}deg)`;
    hour.style.transform = `rotate(${30*hr + min/2}deg)`;
}

setInterval(getTime,10);
