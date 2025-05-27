function journey(budget, season) {
    let sum = 0
    let destination
    let accomodation

    if(budget <= 100) {
        destination = "Bulgaria";
        switch(season) {
            case("summer"):
            sum = budget * 0.30;
                break;
            case("winter"):
            sum = budget * 0.7;
                break;
        }
    } else if(budget <= 1000) {
        destination = "Balkans";
        switch(season) {
            case("summer"):
            sum = budget * 0.40;
                break;
            case("winter"):
            sum = budget * 0.8;
                break;
        }
    } else if(budget > 1000) {
        destination = "Europe";
        switch(season) {
            case("summer"):
            sum = budget * 0.90;
                break;
            case("winter"):
            sum = budget * 0.90;
                break;
        }
    }
    

    if(season === "summer" && destination !== "Europe") {
        accomodation = "Camp";
    } else if (season === "winter") {
        accomodation = "Hotel";
    } else if (destination === "Europe") {
        accomodation = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accomodation} - ${sum.toFixed(2)}`);
    
}

journey(1500,
    "summer")