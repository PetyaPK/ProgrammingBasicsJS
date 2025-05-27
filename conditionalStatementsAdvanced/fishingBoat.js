function fishingBoat(budget, season, fishermenNum) {
    let sum = 0;
    let totalSum = 0;
    let totalSumDiscount = 0;

    switch(season) {
        case("Spring"):
        sum = 3000;
            break;
        case("Summer" || "Autumn"):
        sum = 4200;
            break;
        case("Winter"):
        sum = 2600;
            break;
    }
    

    if (fishermenNum <= 6) {
        totalSum = sum * 0.9;
    } else if (fishermenNum > 7 && fishermenNum <= 11) {
        totalSum = sum * 0.85;
    } else if (fishermenNum >= 12) {
        totalSum = sum * 0.75;
    } else {
        totalSum = sum * 1;
    }
    

    if (fishermenNum % 2 !== 1 && season !== "Autumn") {
        totalSumDiscount = totalSum * 0.95;
    } else {
        totalSumDiscount = totalSum * 1;
    }
        
    let difference = Math.abs(budget - totalSumDiscount).toFixed(2);
    
    if(budget >= totalSumDiscount) {
        console.log(`Yes! You have ${difference} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference} leva.`);
    }
}

fishingBoat(3000,
    "Summer",
    11)