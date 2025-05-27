function dishwasher(input) {
    let index = 0;
    let bottlesNum = Number(input[index]);
    index++

    let allDetergent = bottlesNum * 750;
    let usedDetergent = 0;
    let dishesCounter = 0;
    let potsCounter = 0;
    let loadCount = 0;

    while (input[index] !== "End") {
        loadCount++;
        let items = Number(input[index]);
        index++;

        if (loadCount % 3 === 0) {
            usedDetergent += items * 15;
            potsCounter += items;
        } else {
            usedDetergent += items * 5;
            dishesCounter += items;
        }

        if (usedDetergent > allDetergent) {
            console.log(`Not enough detergent, ${usedDetergent - allDetergent} ml. more necessary!`);
            return;
        }
    }
    
    console.log(`Detergent was enough!`);
    console.log(`${dishesCounter} dishes and ${potsCounter} pots were washed.`);
    console.log(`Leftover detergent ${allDetergent - usedDetergent} ml.`);

}


dishwasher(["1",
    "10",
    "15",
    "10",
    "12",
    "13",
    "30",])








