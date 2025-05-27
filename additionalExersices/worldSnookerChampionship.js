function worldSnookerChampionship(tournamentStage, ticketType, ticketNum, trophyPhoto) {
    let price = 0;

    switch (tournamentStage) {
        case "Quarter final":
            if (ticketType === "Standard") {
                price = 55.50;
            } else if (ticketType === "Premium") {
                price = 105.20;
            } else if (ticketType === "VIP") {
                price = 118.90;
            }
            break;
        case "Semi final":
            if (ticketType === "Standard") {
                price = 75.88;
            } else if (ticketType === "Premium") {
                price = 125.22;
            } else if (ticketType === "VIP") {
                price = 300.40;
            }
            break;
        case "Final":
            if (ticketType === "Standard") {
                price = 110.10;
            } else if (ticketType === "Premium") {
                price = 160.66;
            } else if (ticketType === "VIP") {
                price = 400;
            }
            break;
    }

    let sumFirst = price * ticketNum;
    let sumDiscount = sumFirst
    
    if (sumFirst > 4000) {
        sumDiscount *= 0.75;
    } else if (sumFirst > 2500) {
        sumDiscount *= 0.90;
    } else {
        sumDiscount *= 1;
    }

    let sumAll = sumDiscount;

    if (trophyPhoto === "Y" && sumFirst <= 4000) {
        sumAll += 40 * ticketNum;
    } else if (trophyPhoto === "N") {
        sumAll == sumDiscount;
    }

    console.log(sumAll.toFixed(2));

}

worldSnookerChampionship("Final",
    "Premium",
    25,
    "Y"
    
)