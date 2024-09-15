setInterval(() => {
    console.log( simpleAIsOwned);
    bytes += ((simpleAIsOwned * simpleAIMult) + (moreAdvancedAIOwned * moreAdvancedAIMult));
    bytesAmount.innerHTML = Math.round(bytes) + " Bytes (b)";
    if (bytes > maximumSpace){
        bytes = maximumSpace;
    }
}, 50);
