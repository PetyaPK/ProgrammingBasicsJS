function catFood(input) {
    let index = 0;
    let catsNum = Number(input[index]);
    index++;

    let smallCatsGroup = 0;
    let bigCatsGroup = 0;
    let giantCatsGroup = 0;
    let allFood = 0; 

    for(let i = 1; i <= catsNum; i++) {
        let foodQuantity = Number(input[index]);
        index++;

        allFood += foodQuantity;
        
        if (foodQuantity >= 100 && foodQuantity < 200) {
            smallCatsGroup++;
        } else if (foodQuantity >=200 && foodQuantity < 300) {
            bigCatsGroup++;
        } else if (foodQuantity >= 300 && foodQuantity < 400) {
            giantCatsGroup++
        }
    }

    let priceFoodPerDay = allFood / 1000  * 12.45;

    console.log(`Group 1: ${smallCatsGroup} cats.`);
    console.log(`Group 2: ${bigCatsGroup} cats.`);
    console.log(`Group 3: ${giantCatsGroup} cats.`);
    console.log(`Price for food per day: ${priceFoodPerDay.toFixed(2)} lv.`);
    
}

catFood(["10",
    "256",
"348",
"198",
"322",
"186",
"294",
"321",
"100",
"200",
"300"])

    
    