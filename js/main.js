const bytesAmount = document.getElementById("bytesAmount");
const simpleAIButton = document.getElementById("simpleAIButton");
const maximumText = document.getElementById("maxSpace");
const newMouseButton=document.getElementById("buyNewMouse");
var simpleAICost = 100;
var onClickAmount = 1;
var bytes = 0;
var perSecondAmount = 0;
var maximumSpace = 1000;
var memUpCost = 1000;
var newMouseCost = 15;

function type(){
    bytes += onClickAmount;
}

function buySimpleAI(){
    if (bytes >= simpleAICost){
        bytes-=simpleAICost;
        perSecondAmount++;
        simpleAICost+=Math.round(simpleAICost*0.15);
        simpleAIButton.innerHTML = ("Simplistic AI (" + simpleAICost + " b)")
    }
    else {
        alert("You do not have enough bytes. You need " + simpleAICost + " bytes to buy this.")
    }
}

function buyNewMouse(){
    if (bytes >= newMouseCost){
        bytes-=newMouseCost;
        onClickAmount++;
        newMouseCost+=Math.round(newMouseCost*0.15);
        newMouseButton.innerHTML = ("New Mouse (" + newMouseCost + " b)")
    }
    else {
        alert("You do not have enough bytes. You need " + simpleAICost + " bytes to buy this.")
    }
}

function buyMemUp(){
    if (bytes = memUpCost) {
        bytes-=memUpCost;
        memUpCost*=1000;
        maximumSpace*=1000;
        maximumText.innerHTML = ("Buy Memory Upgrade (" + maximumSpace + "b => " + maximumSpace*1000 + " b)")
    }
}