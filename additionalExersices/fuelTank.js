function fuelTank(fuel, liters) {
    switch (fuel) {
        case "Diesel":
            if (liters >= 25) {
                console.log(`You have enough diesel.`);
            } else {
                console.log(`Fill your tank with diesel!`);
            }
            break;
        case "Gasoline":
            if (liters >= 25) {
                console.log(`You have enough gasoline.`);
            } else {
                console.log(`Fill your tank with gasoline!`);
            }
            break;
        case "Gas":
            if (liters >= 25) {
                console.log(`You have enough gas.`);
            } else {
                console.log(`Fill your tank with gas!`);
            }
            break;
        default: 
            console.log(`Invalid fuel!`);
            break;
    }
}

fuelTank("Kerosene",
    200
    
    )