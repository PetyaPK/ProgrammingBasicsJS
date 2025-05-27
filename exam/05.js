function puppyCare(input) {
    let index = 0;
    let allQuantityKg = Number(input[index]);
    index++;

    let allQuantityGr = allQuantityKg * 1000;
    
    let allFoodBeforeAdoption = 0;

    let command = input[index];
    index++;

    while (command !== "Adopted") {
        let foodQuantity = Number(command);

        allFoodBeforeAdoption += foodQuantity;
      
        command = input[index];
        index++;
        
    }

    let leftFood = allQuantityGr - allFoodBeforeAdoption;
    let neededFood = allFoodBeforeAdoption - allQuantityGr;

    if (allFoodBeforeAdoption <= allQuantityGr) {
        console.log(`Food is enough! Leftovers: ${leftFood} grams.`);
    } else if (allFoodBeforeAdoption > allQuantityGr) {
        console.log(`Food is not enough. You need ${neededFood} grams more.`);
    }
}

puppyCare(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"])
    
    
    