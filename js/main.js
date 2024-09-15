function gebid(e){
    return document.getElementById(e);
}

const bytesAmount = gebid("bytesAmount");
const simpleAIButton = gebid("simpleAIButton");
const maximumText = gebid("maxSpace");
const newMouseButton = gebid("buyNewMouse");
const upgradesList = gebid("upgradesOl");
const memUpButton = gebid("upgradeMemory");
const keyboardImage = gebid("key");
const moreAdvancedAIButton = gebid("moreAdvancedAIButton");
const BoughtItemsContainer = gebid("bought-items-container");
const errorList = gebid("errorList");
var newMouseCost = 16, simpleAICost = 128, moreAdvancedAICost = 1024;
var bytes = 1000;
var maximumSpace = 1000;
var memUpCost = 1000;
var simpleAIsOwned = 0, newMiceOwned = 0, moreAdvancedAIOwned = 0;
var newMiceMult = 1, simpleAIMult = 1, moreAdvancedAIMult = 1;

keyboardImage.addEventListener("mousedown", function(){keyboardImage.src="images/key_pressed.bmp"});
keyboardImage.addEventListener("mouseup", function(){keyboardImage.src="images/key.bmp"});

function NemAlert(check){
    addError("NEM", ("This item costs too much. You need " + check + " to buy."));
}

function type(){
    bytes+=((newMiceOwned)*newMiceMult)+1;
}

function buySimpleAI(){
    if (bytes >= simpleAICost){
        bytes-=simpleAICost;
        simpleAIsOwned++;
        simpleAICost+=Math.round(simpleAICost*0.15);
        const picture = document.createElement("button");
        picture.innerHTML = ("<abbr title='This is a Bought Simple AI, earning you " + simpleAIMult + " per second. Currently Owned: " + simpleAIsOwned + "'><img src='images/upgrade10-19.bmp' height='50' width='50'></abbr>");
        BoughtItemsContainer.appendChild(picture)
        simpleAIButton.innerHTML = ("<abbr title='Earns "+ simpleAIsOwned*simpleAIMult + " per second, Owned: "+ simpleAIsOwned +"'><img src='images/upgrade10-19.bmp'><h2>Simplistic AI (" + simpleAICost + " b)</h2></abbr>")
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
            button.innerHTML="<abbr title='Cost: 4096, Effect: Simplistic AI's are twice as efficent. Upgrade#11'><img src='images/upgrade10-19.bmp' height='50' width='50' /></abbr>";
            button.addEventListener("click", function(){buyUpgrade(11,button)});
            upgradesList.appendChild(button);
        }
    }
    else {
        NemAlert(simpleAICost);
    }
}

function buyMoreAdvancedAI(){
    if (bytes >= moreAdvancedAICost){
        bytes-=moreAdvancedAICost;
        moreAdvancedAIOwned++;
        moreAdvancedAICost+=Math.round(moreAdvancedAICost*0.15);
        const picture = document.createElement("button");
        picture.innerHTML = ("<abbr title='This is a Bought More Advanced AI, earning you " + moreAdvancedAIMult + " per second. Currently Owned: " + moreAdvancedAIOwned + "'><img src='images/upgrade10-19.bmp' height='50'></abbr>");
        BoughtItemsContainer.appendChild(picture);
        moreAdvancedAIButton.innerHTML = ("<abbr title='Earns "+ moreAdvancedAIOwned*moreAdvancedAIMult + " per second, Owned: "+ moreAdvancedAIOwned +"'><img src='images/upgrade20-29.bmp'><h2>Simplistic AI (" + moreAdvancedAIOwned + " b)</h2></abbr>");
        if (moreAdvancedAIOwned == 5){
            const button = document.createElement("button");
            button.setAttribute("class", "upgrade0");
            button.innerHTML="<abbr title='Cost: 4096, Effect: More Advanced AI's are twice as efficent. Upgrade#20'><img src='images/upgrade20-29.bmp' height='50' width='50' /></abbr>";
            button.addEventListener("click", function(){buyUpgrade(20,button)});
            upgradesList.appendChild(button);
        }
        else if (moreAdvancedAIOwned == 10){
            const button = document.createElement("button");
            button.setAttribute("class", "upgrade1");
            button.innerHTML="<abbr title='Cost: 16384, Effect: More Advanced AI's are twice as efficent. Upgrade#21'><img src='images/upgrade20-29.bmp' height='50' width='50' /></abbr>";
            button.addEventListener("click", function(){buyUpgrade(21,button)});
            upgradesList.appendChild(button);
        }
    }
    else {
        NemAlert(moreAdvancedAICost);
    }
}


function buyNewMouse(){
    if (bytes >= newMouseCost){
        bytes-=newMouseCost;
        newMiceOwned++;
        newMouseCost+=Math.round(newMouseCost*0.15);
        const picture = document.createElement("button");
        picture.innerHTML = ("<abbr title='This is a Bought New Mouse, earning you " + newMiceMult + " per click. Currently Owned: " + newMiceOwned + "'><img src='images/upgrade0-9.bmp' height='50' /></abbr>");
        BoughtItemsContainer.appendChild(picture);
        newMouseButton.innerHTML = ("<abbr title='Earns "+ newMiceOwned*newMiceMult + " when keyboard clicked, Owned: "+ newMiceOwned +"'><img src='images/upgrade0-9.bmp'><h2>New Mouse (" + newMouseCost + " b)</h2></abbr>")
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
    if (bytes >= memUpCost) {
        bytes-=memUpCost;
        memUpCost*=1000;
        maximumSpace*=1000;
        memUpButton.title = "Buy Memory Upgrade (" + maximumSpace + "b =>" + maximumSpace*1000 + "b)";
        maximumText.innerHTML = ("Maximum: " + maximumSpace)
    }
    else {
        NemAlert(memUpCost);
    }
}

function addError(errorType, errorInfo) {
    const newError = document.createElement("li");
    newError.innerHTML = ("Error of type " + errorType + ": " + errorInfo);
    errorList.appendChild(newError);
}