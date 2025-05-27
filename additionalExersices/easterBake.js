function easterBake(input) {
    let index = 0;
    let easterBreadNum = Number(input[index]);
    index++;

    let sugarAll = 0;
    let flourAll = 0;

    let maxUsedFlour = 0;
    let maxUsedSugar = 0;

    for (let i = 0; i < easterBreadNum; i++) {
        let sugarQuantity = Number(input[index]);
        index++;
        let flourQuantity = Number(input[index]);
        index++;

        if (sugarQuantity > maxUsedSugar) {
            maxUsedSugar = sugarQuantity;
        }

        if (flourQuantity > maxUsedFlour) {
            maxUsedFlour = flourQuantity;
        }

        sugarAll += sugarQuantity;
        flourAll += flourQuantity;
    }

        let sugarPacks = Math.ceil(sugarAll / 950);
        let flourPacks = Math.ceil(flourAll / 750);

    

    console.log(`Sugar: ${sugarPacks}`);
    console.log(`Flour: ${flourPacks}`);
    console.log(`Max used flour is ${maxUsedFlour} grams, max used sugar is ${maxUsedSugar} grams.`);
    
}

easterBake(["4",
    "500",
    "350",
    "560",
    "430",
    "600",
    "345",
    "578",
    "543"])
    
    
    