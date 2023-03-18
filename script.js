// 
let scores={
    red:0,
    blue:0,
    green:0,
    yellow:0
};
function OpeningCeremony(){
    setTimeout(()=>{console.log("Let the games begin")},1000);
    setTimeout(()=>{Race100M(scores)},3000);
}
function Race100M(scores){
    var event="Race100M"
    console.log("Event : "+event)
    console.log("")
    console.log("previous score :")
    let colors=Object.keys(scores);
    colors.forEach((c)=>{
        console.log(c+" "+scores[c])
    })
    console.log("")

    colors.forEach((c)=>{
        scores[c]=getRndInteger(10,15);
    })
    var color1;
    var min1=16;
    var color2;
    var arr=[];
    colors.forEach((c)=>{
        if(min1>scores[c]){
            min1=scores[c];
            color1=c;
        }
        arr.push(scores[c]);
    })
    arr.sort((a,b)=>{return a-b})
    colors.forEach((c)=>{
        if(scores[c]==arr[1]){
            color2=c;
        }
    })
    scores[color1]=min1+50;
    scores[color2]=arr[1]+25;
    console.log("updated scores :")
    colors.forEach((c)=>{
        console.log(c+" "+scores[c])
    })
    console.log("")



    let list=Object.keys(scores).sort((a,b)=>{return scores[a]-scores[b]});
    console.log(list[3]+" won the event "+event);
    console.log("")

    setTimeout(()=>{LongJump(scores)},2000);
}
function LongJump(scores){
    var event="LongJump"
    console.log("Event : "+event)
    console.log("")

    console.log("previous scores :")
    var colors=Object.keys(scores)
    colors.forEach((c)=>{
        console.log(c+" "+scores[c])
    })
    console.log("")

    var arr=["red","blue","green","yellow"];
    var rand=getRndInteger(0,3);
    var p=scores[arr[rand]];
    p+=150;
    scores[arr[rand]]=p;
    console.log("updated score :")
    colors.forEach((c)=>{
        console.log(c+" "+scores[c])
    })   
    console.log("")

    let list=Object.keys(scores).sort((a,b)=>{return scores[a]-scores[b]});
    console.log(list[3]+" won the event "+event);
    console.log("")
 
    setTimeout(()=>{HighJump(scores)},0)
}
function HighJump(scores){
    var event="High Jump function"
    console.log("Event : "+event)
    console.log("")

    console.log("Long Jump Results: ")
    let colors=Object.keys(scores);
    colors.forEach((c)=>{
        console.log(c+" "+scores[c])
    }) 
    console.log("")

    var color=prompt("Enter Color");
    flag=0;
    colors.forEach((c)=>{
        if(c==color){
            flag=1;
            var p=scores[c]
            p+=100;
            scores[c]=p;
        }
    })
    if(flag==0){
        console.log("Event was Cancelled");
    }
    console.log("High Jump Result: ")
    colors.forEach((c)=>{
        console.log(c+" "+scores[c])
    });
    console.log("")

        let list=Object.keys(scores).sort((a,b)=>{return scores[a]-scores[b]});
    console.log(list[3]+" results "+event);
    console.log("")

    setTimeout(()=>{AwardCeremony(scores)},0)
}
function AwardCeremony(scores){
    var event="Award Ceremony"
    console.log("Event :"+event)
    let list=Object.keys(scores).sort((a,b)=>
    {return scores[b]-scores[a]});
    let colors=Object.keys(list);
    var arr=["first","second","third","fourth"]
    var i=0;
    colors.forEach((c)=>{
        console.log(`${list[c]} came ${arr[i++]} with ${scores[list[c]]} points`)
    })
}

function getRndInteger(num1, num2) {
    return Math.floor(Math.random() * (num1 - num2) ) + num2;
  }
console.log(OpeningCeremony())
