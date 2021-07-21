const clock = document.getElementById("clock");

function getClock(){

    const current = new Date();
    const future = new Date("December 18, 2021 00:00:00");

    const dDay = future - current.getTime();

    const hour = String(Math.ceil((dDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2,"0");
    const min =  String(Math.ceil((dDay % (1000 * 60 * 60)) / (1000 * 60))).padStart(2,"0");
    const sec = String(Math.ceil((dDay % (1000 * 60)) / 1000)).padStart(2,"0");

    clock.innerText = `${hour}h : ${min}m : ${sec}s`;
}





getClock();
setInterval(getClock, 1000);
