function infoSpeed (speedValue) {
    if (speedValue <= 10) {
        console.log ("slow");

    } else if (speedValue <= 50) {
        console.log ("average");

    } else if (speedValue <= 150) {
        console.log("fast");
        
    } else if (speedValue <=1000) {
        console.log("ultra fast");
        
    } else if (speedValue >1000) {
        console.log("extremely fast");
        
    }
}

infoSpeed (1200)