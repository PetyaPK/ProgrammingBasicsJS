function reportSystem(input) {
    let index = 0;
    let expectedSum = Number(input[index]);
    index++;

    let sum = 0;
    let cashCount = 0;
    let cashSum = 0;
    let cardCount = 0;
    let cardSum = 0;


    let command = input[index];
    index++;

    while(command !== "End") {
        let cashPricePerProduct = Number(command);        
        let cardPricePerProduct = Number(input[index]);
        index++;
        

        if (cashPricePerProduct > 100) {
            console.log(`Error in transaction!`);
        } else {
            console.log(`Product sold!`);
            sum += cashPricePerProduct;
            cashSum += cashPricePerProduct;
            cashCount++;
        }
        if (cardPricePerProduct < 10) {
            console.log(`Error in transaction!`);
        } else {
            console.log(`Product sold!`);
            sum += cardPricePerProduct;
            cardSum += cardPricePerProduct;
            cardCount++;
        }

        let averageCash = cashSum / cashCount;
        let averageCard = cardSum / cardCount;

        if (sum >= expectedSum) {
            console.log(`Average CS: ${averageCash.toFixed(2)}`);
            console.log(`Average CC: ${averageCard.toFixed(2)}`);
            return;
        }
            
        
        command = input[index];
        index++;
    }


    console.log(`Failed to collect required money for charity.`);
    
}

reportSystem(["500",
    "120",
    "8",
    "63",
    "256",
    "78",
    "317"])
    
    
    
