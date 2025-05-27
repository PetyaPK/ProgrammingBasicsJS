function bikeRace(juniorsNum, seniorsNum, runway) {
    let juniorsTaxSum = 0;
    let seniorsTaxSum = 0;

    switch (runway) {
        case "trail":
            juniorsTaxSum = juniorsNum * 5.50;
            seniorsTaxSum = seniorsNum * 7;
            break;
        case "cross-country":
            juniorsTaxSum = juniorsNum * 8;
            seniorsTaxSum = seniorsNum * 9.50;
            if (juniorsNum + seniorsNum >= 50) {
                juniorsTaxSum *= 0.75;
                seniorsTaxSum *= 0.75;
            }
            break;
        case "downhill":
            juniorsTaxSum = juniorsNum * 12.25;
            seniorsTaxSum = seniorsNum * 13.75;
            break;
        case "road":
            juniorsTaxSum = juniorsNum * 20;
            seniorsTaxSum = seniorsNum * 21.50;
            break;
    }

    let donationSum = (juniorsTaxSum + seniorsTaxSum) * 0.95;

    console.log(`${donationSum.toFixed(2)}`);
    
}

bikeRace(3,
    40,
    "road"
    
    
    
    
    )