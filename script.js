function nextScreen(current,next){
    document.getElementById(current).classList.remove("active");
    document.getElementById(next).classList.add("active");
}

/* GAME 1 - Heartbeat Monitor */
let interval;
let currentBPM=0;

function startMonitor(){
    interval=setInterval(()=>{
        currentBPM=Math.floor(Math.random()*120)+40; // 40-160
        document.getElementById("bpm").innerText=currentBPM;
    },500);
}

function stopMonitor(){
    clearInterval(interval);

    if(currentBPM>=70 && currentBPM<=90){
        alert("Heartbeat Normal Doctor 👨‍⚕️💙");
        nextScreen("game1","game2");
    }else{
        alert("Abnormal BPM 😬 Try Again!");
    }
}

/* GAME 2 - Friendship Cure */
function chooseMedicine(choice){
    if(choice==="care" || choice==="fun"){
        alert("Correct Treatment! Friendship Saved 💙");
        nextScreen("game2","message");
    }else{
        alert("Wrong Medicine 😜 Friendship Still Critical!");
    }
}

/* COUNTDOWN */
function startCountdown(){
    const birthday=new Date("March 30, 2026 00:00:00").getTime();

    setInterval(()=>{
        const now=new Date().getTime();
        const distance=birthday-now;

        const days=Math.floor(distance/(1000*60*60*24));
        const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
        const seconds=Math.floor((distance%(1000*60))/1000);

        document.getElementById("timer").innerHTML=
        days+"d "+hours+"h "+minutes+"m "+seconds+"s";
    },1000);
}