const startElement=document.getElementById('start');
const stopElement=document.getElementById('stop');
const resetElement=document.getElementById('reset');
const timerDisplay=document.getElementById('timer');

const ting= new Audio('ting.mp3');
const resetaudio=new Audio('reset.mp3');

let interval;
let timeLeft=1500;

function updateTimer(){
    let minutes=Math.floor(timeLeft/60);
    let seconds= timeLeft%60;

    newTime= pad(minutes)+":"+pad(seconds);
    timerDisplay.innerHTML=newTime;
}

startElement.addEventListener('click',()=>{
    if(timeLeft===1500){
    ting.play();}

    startElement.disabled=true;
    stopElement.disabled=false;
    interval=setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft===0){
            clearInterval(interval);
            ting.play();
            alert("Time's Up");
            timeLeft=1500;
            updateTimer();
        }
    }, 1000);
})

stopElement.addEventListener('click',()=>{
    clearInterval(interval);
    startElement.disabled=false;
    stopElement.disabled=true;
})

resetElement.addEventListener('click',()=>{
    resetaudio.play();
    clearInterval(interval);
    timeLeft=1500;
    updateTimer();
    stopElement.disabled=true;
})

function pad(number){
    return number<10?'0'+number:number;
}