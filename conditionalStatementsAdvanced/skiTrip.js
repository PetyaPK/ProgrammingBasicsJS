function skiTrip(days, accomodation, rating) {
    let price = 0
    let priceDiscount = 0
    let totalPrice = 0

    switch(accomodation) {
        case "room for one person":
            priceDiscount = 18.00 * (days - 1);
                break;
        case "apartment":
            price = 25.00 * (days - 1);
            if (days < 10) {
                priceDiscount =  price * 0.70;
            } else if (days >= 10 && days <= 15) {
                priceDiscount = price * 0.65;
            } else if (days > 15) {
                priceDiscount = price * 0.50;
            }
            break;
        case "president apartment":
            price = 35.00 * (days - 1);
            if (days < 10) {
                 priceDiscount =  price * 0.90;
            } else if (days >= 10 && days <= 15) {
                 priceDiscount = price * 0.85;
            } else if (days > 15) {
                priceDiscount = price * 0.80;
            }
            break;
    }

    if (rating === "positive") {
        totalPrice = priceDiscount * 1.25;
    } else if (rating === "negative") {
        totalPrice = priceDiscount * 0.90;
    }

    console.log(totalPrice.toFixed(2));
    
}

skiTrip(12, 
    "room for one person", 
    "positive")