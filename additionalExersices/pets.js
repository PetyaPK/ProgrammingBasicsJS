function pets(days, allLeftFoodKg, dogDayFoodKg, catDayFoodKg, turtleDayFoodG) {
    let turtleDayFoodKg = turtleDayFoodG / 1000;

    let dogAll = dogDayFoodKg * days;
    let catAll = catDayFoodKg * days;
    let turtleAll = turtleDayFoodKg * days;
    let allPetsFood = dogAll + catAll + turtleAll;
    let diff = allLeftFoodKg - allPetsFood;
    
    

    if (diff > 0) {
        console.log(`${Math.floor(diff.toFixed(2))} kilos of food left.`);        
    } else if (diff <= 0) {
        let diff1 = Math.abs(diff);
        console.log(`${Math.ceil(diff1.toFixed(2))} more kilos of food are needed.`);
    }
}

pets(5,
    10,
    2.1,
    0.8,
    321
    
    )