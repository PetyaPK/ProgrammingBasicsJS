function pastryShop(sweetsType, sweetsNum, dayOfDecember) {
    let price = 0;

    switch(sweetsType) {
        case "Cake":
            if (dayOfDecember <= 15) {
                price = sweetsNum * 24;
            } else if (dayOfDecember > 15) {
                price = sweetsNum * 28.70;
            }
            break;
        case "Souffle":
            if (dayOfDecember <= 15) {
                price = sweetsNum * 6.66;
            } else if (dayOfDecember > 15) {
                price = sweetsNum * 9.80;
            }
            break;
        case "Baklava":
            if (dayOfDecember <= 15) {
                price = sweetsNum * 12.60;
            } else if (dayOfDecember > 15) {
                price = sweetsNum * 16.98;
            }
            break;
    }

    if (dayOfDecember <= 22) {
        if (price >= 100 && price <= 200) {
            price *= 0.85;
        } else if (price > 200) {
            price *= 0.75;
        }
    }

    if (dayOfDecember <= 15) {
        price *= 0.90;
    }

    console.log(price.toFixed(2));
    
}

pastryShop( "Baklava",
    50,
    1
    
    
    )