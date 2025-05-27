function fuelTank2(fuel, quantity, clubCard) {
    let sum = 0;

    switch (fuel) {
        case "Gas":
            if (clubCard === "No") {
                sum = quantity * 0.93;
            } else if (clubCard === "Yes") {
                sum = (quantity * 0.93) - (0.08 * quantity);
            }
            break;
        case "Diesel":
            if (clubCard === "No") {
                sum = quantity * 2.33;
            } else if (clubCard === "Yes") {
                sum = (quantity * 2.33) - (0.12 * quantity);
            }
            break;
        case "Gasoline":
            if (clubCard === "No") {
                sum = quantity * 2.22;
            } else if (clubCard === "Yes") {
                sum = (quantity * 2.22) - (0.18 * quantity);
            }
            break;
    }

    if (quantity >= 20 && quantity <= 25) {
        sum *= 0.92;
    } else if (quantity > 25) {
        sum *= 0.90;
    }

    console.log(`${sum.toFixed(2)} lv.`)
    
}

fuelTank2("Diesel",
    19,
    "No"
    )