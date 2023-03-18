function OpeningCeremony(score,Callback){
    
    setTimeout(() =>{
        console.log("Let the games begin");
       Race100M(score,Callback);
      },1000);
}

function Race100M(score, Callback){
    setTimeout(function (){
        const colors = Object.keys(score);
        const time = {};
        colors.forEach(function (color){
            time[color] = Math.floor(Math.random()*6)+10;
        })

        const sortTime = object.entries(time).sort((a, b)=>a[1]-b[1]);
        //console.log(sortTime);
        score[sortTime[0][0]] += 50;
        score[sortTime[1][0]] += 25;
        console.log("Race 100M Results: ")
        console.log(score);
        LongJump (score);

    })
}
function LongJump(score){
    setTimeout(function () {
          console.log("Long Jump Results: ");
          const colors = Object.keys(score);
          const clickColor = colors[Math.floor(Math.random()*4)];
          score[clickColor] += 150;
          console.log(score);
          HighJump(score);
    },2000);
}
function HighJump(score){
    const prompt = require("prompt-sync")({sigint:true});
    console.log("High jump results: ");
    const inputColor = prompt("What colour secured the highest jump?");
    if(inputColor==='red' || inputColor==='blue' || inputColor==='green' || inputColor==='yellow'){
        score[inputColor] += 100;
        console.log(score)
    }else{
        console.log("Event was cancelled") ;
    }
    AwardCeremony(score);
}
function AwardCeremony(score){
    console.log("Award ceremony start: ");
    const sortScore = object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log(`${sortScore[0][0]} came first with ${sortScore[0][1]} points`);
    console.log(`${sortScore[1][0]} came second with ${sortScore[1][1]} points`);
    console.log(`${sortScore[2][0]} came third with ${sortScore[2][1]} points`);
}

const initValue = {red:0,blue:0,green:0,yellow:0}
OpeningCeremony(initValue, Race100M)