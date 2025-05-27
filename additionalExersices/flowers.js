function flowers(hrizantemi, rozi, laleta, season, holiday) {
    let sumHrizantemi = 0;
    let sumRozi = 0;
    let sumLaleta = 0;

    switch (season) {
        case "Spring":
        case "Summer":
            sumHrizantemi = hrizantemi * 2;
            sumRozi = rozi * 4.10;
            sumLaleta = laleta * 2.50;
                break;
        case "Autumn":
        case "Winter":
            sumHrizantemi = hrizantemi * 3.75;
            sumRozi = rozi * 4.50;
            sumLaleta = laleta * 4.15;
                break;
    }

    if (holiday === "Y") {
        sumHrizantemi *= 1.15;
        sumLaleta *= 1.15;
        sumRozi *= 1.15;
    }

    let sumBouqet = sumHrizantemi + sumRozi + sumLaleta;

    if (season === "Spring" && laleta > 7) {
        sumBouqet *= 0.95;
    }
    if (season === "Winter" && rozi >= 10) {
        sumBouqet *= 0.90;
    }
    if (hrizantemi + rozi + laleta > 20) {
        sumBouqet *= 0.80;
    }

    let sumBouqetAll = sumBouqet + 2;

    console.log(sumBouqetAll.toFixed(2));
    
}

flowers(10,
    10,
    10,
    "Autumn",
    "N"
    

    )