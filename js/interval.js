setInterval(() => {
    bytes += perSecondAmount / 20;
    bytesAmount.innerHTML = Math.round(bytes) + " Bytes (b)";
    if (bytes > maximumSpace){
        bytes = maximumSpace;
    }
}, 50);
