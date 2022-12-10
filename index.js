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
    second.style.transform = `rotate(${singleMove * sec}deg)`;
    // 60sec = 1min, 1sec = (1/60)sec * 6(deg/sec) ==> every minute has (1/60)*6 degrees of seconds added
    minute.style.transform = `rotate(${singleMove * min + sec / 10}deg)`;
    // 1min = (1/60)hr, ==> 30degree*(1/60)hr => 0.5 of theminute shall be added to evry hour
    hour.style.transform = `rotate(${30*hr + min/2}deg)`;
}

setInterval(getTime,10);
