function harvest(X, Y, Z, workersNum) {
    let allGrapesKg = X * Y;
    let allWineLiters = (allGrapesKg * 0.40) / 2.5;
    let diff = Math.floor(Z - allWineLiters);

    if (allWineLiters < Z) {
        console.log(`It will be a tough winter! More ${diff} liters wine needed.`);
    } else if (allWineLiters >= Z) {
        console.log(`Good harvest this year! Total wine: ${allWineLiters} liters.`);
        let diff1 = Math.ceil(Math.abs(diff));
        let winePerWorker = Math.ceil(diff1 / workersNum);
        console.log(`${diff1} liters left -> ${winePerWorker} liters per person.`);    
    }

}

harvest(1020,
    1.5,
    425,
    4
    
    )