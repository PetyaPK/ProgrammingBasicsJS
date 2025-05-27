function trainingLab (w, h) {
    let wCm = w * 100;
    let hCm = h * 100;

    let hCmWithoutHall = hCm - 100;
    let tables = Math.floor(hCmWithoutHall / 70);
    let rows = Math.floor(wCm / 120);
    let workingPlaces = tables * rows - 3;

    console.log(workingPlaces);
    
    
}

trainingLab(15,
    8.9
    )