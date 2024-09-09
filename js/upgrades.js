function buyUpgrade(UID, buttonRef){
    console.log("Attempted to buy upgrade")
    const parent=buttonRef.parentNode;
    switch(UID){
        case 0:
            if (bytes >= 128){
                newMiceMult *= 2;
                bytes -= 128;
                parent.removeChild(buttonRef);
            }
            else {
                NemAlert(128);
            }
            break;
        case 1:
            if (bytes >= 1024){
                newMiceMult *= 2;
                bytes -= 1024;
                parent.removeChild(buttonRef);
            }
            else {
                NemAlert(1024);
            }
            break;
        case 10:
            if (bytes >= 256){
                simpleAIMult *= 2;
                bytes -= 256;
                parent.removeChild(buttonRef);
            }
            else {
                NemAlert(256);
            }
            break;
        case 11:
            if (bytes >= 4096){
                simpleAIMult *= 2;
                bytes -= 4096;
                parent.removeChild(buttonRef);
            }
            else {
                NemAlert(4096);
            }
            break;
    }
}