function goldMine(input) {
    let index = 0;
    let locationNumber = Number(input[index]);
    index++;

    while(index < input.length) {
        let expectedAverageDayProduce = Number(input[index]);
        index++;
        let daysPerLocationNum = Number(input[index]);
        index++; 

        let productionForTheDay = 0;
        for(let i = 1; i <= daysPerLocationNum; i++) {
            let production = Number(input[index]);
            index++;

            productionForTheDay += production;

        }
        let averageDayProduce = productionForTheDay / daysPerLocationNum;
        let neededGold = expectedAverageDayProduce - averageDayProduce;

        if (averageDayProduce >= expectedAverageDayProduce) {
            console.log(`Good job! Average gold per day: ${averageDayProduce.toFixed(2)}.`);
        } else if (averageDayProduce < expectedAverageDayProduce) {
            console.log(`You need ${neededGold.toFixed(2)} gold.`);
        }
        
    }
 
}

goldMine(["1",
    "5",
    "3",
    "10",
    "1",
    "3"])
    
    