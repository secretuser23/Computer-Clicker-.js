const bytesAmount = document.getElementById("bytesAmount");
const simpleAIButton = document.getElementById("simpleAIButton");
const maximumText = document.getElementById("maxSpace");
const newMouseButton=document.getElementById("buyNewMouse");
const upgradesList=document.getElementById("upgradesOl");
var simpleAICost = 100;
var bytes = 0;
var perSecondAmount = 0;
var maximumSpace = 1000;
var memUpCost = 1000;
var newMouseCost = 15;
var simpleAIsOwned = 0, newMiceOwned = 0;
var newMiceMult = 1, simpleAIMult = 1;

function NemAlert(check){
    alert("Sorry, you do not have enough to buy this. You need " + check + " bytes (b).")
}

function type(){
    bytes+=((newMiceOwned)*newMiceMult)+1;
}

function buySimpleAI(){
    if (bytes >= simpleAICost){
        bytes-=simpleAICost;
        perSecondAmount++;
        simpleAICost+=Math.round(simpleAICost*0.15);
        simpleAIButton.innerHTML = ("<abbr title='Earns "+ simpleAIsOwned*simpleAIMult + " per second, Owned: "+ simpleAIsOwned +"'>Simplistic AI (" + simpleAICost + " b)</abbr>")
        simpleAIsOwned++;
        if (simpleAIsOwned == 5){
            const button = document.createElement("button");
            button.setAttribute("class", "upgrade0");
            button.innerHTML="<abbr title='Cost: 256, Effect: Simplistic AI's are twice as efficent. Upgrade#10'><img src='images/upgrade10-19.bmp' height='50' width='50' /></abbr>";
            button.addEventListener("click", function(){buyUpgrade(10,button)});
            upgradesList.appendChild(button);
        }
        else if (simpleAIsOwned == 10){
            const button = document.createElement("button");
            button.setAttribute("class", "upgrade1");
            button.innerHTML="<abbr title='Cost: 4096, Effect: Simplistoc AI's are twice as efficent. Upgrade#11'><img src='images/upgrade10-19.bmp' height='50' width='50' /></abbr>";
            button.addEventListener("click", function(){buyUpgrade(11,button)});
            upgradesList.appendChild(button);
        }
    }
    else {
        NemAlert(simpleAICost);
    }
}

function buyNewMouse(){
    if (bytes >= newMouseCost){
        bytes-=newMouseCost;
        newMiceOwned++;
        newMouseCost+=Math.round(newMouseCost*0.15);
        newMouseButton.innerHTML = ("<abbr title='Earns "+ newMiceOwned*newMiceMult + " when keyboard clicked, Owned: "+ newMiceOwned +"'>New Mouse (" + newMouseCost + " b)</abbr>")
        if (newMiceOwned == 5){
            const button = document.createElement("button");
            button.setAttribute("class", "upgrade0");
            button.innerHTML="<abbr title='Cost: 128, Effect: New Mice are twice as efficent. Upgrade#0'><img src='images/upgrade0-9.bmp' height='50' width='50' /></abbr>";
            button.addEventListener("click", function(){buyUpgrade(0,button)});
            upgradesList.appendChild(button);
        }
        else if (newMiceOwned == 10){
            const button = document.createElement("button");
            button.setAttribute("class", "upgrade1");
            button.innerHTML="<abbr title='Cost: 1024, Effect: New Mice are twice as efficent. Upgrade#1'><img src='images/upgrade0-9.bmp' height='50' width='50' /></abbr>";
            button.addEventListener("click", function(){buyUpgrade(1,button)});
            upgradesList.appendChild(button);
        }
    }
    else {
        NemAlert(newMouseCost);
    }
}

function buyMemUp(){
    if (bytes = memUpCost) {
        bytes-=memUpCost;
        memUpCost*=1000;
        maximumSpace*=1000;
        maximumText.innerHTML = ("Maximum: " + maximumSpace)
    }
}