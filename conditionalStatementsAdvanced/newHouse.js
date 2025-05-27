function newHouse(flowerType, numFlower, budget) {
    let sum = 0
    let totalsum = 0

    switch(flowerType) {
        case("Roses"):
        sum = numFlower * 5;
        break;
        case("Dahlias"):
        sum = numFlower * 3.80;
        break;
        case("Tulips"):
        sum = numFlower * 2.80;
        break;
        case("Narcissus"):
        sum = numFlower * 3;
        break;
        case("Gladiolus"):
        sum = numFlower * 2.50;
        break;
    }

    
    if(flowerType === "Roses" && numFlower > 80) {
        totalsum = sum * 0.90;        
    } else if(flowerType === "Dahlias" && numFlower > 90) {
        totalsum = sum * 0.85;
    } else if(flowerType === "Tulips" && numFlower > 80) {
        totalsum = sum * 0.85;
    } else if(flowerType === "Narcissus" && numFlower < 120) {
        totalsum = sum * 1.15;
    } else if(flowerType === "Gladiolus" && numFlower < 80) {
        totalsum = sum * 1.20;
    } else {
        totalsum = sum;
    }

    let difference = Math.abs(budget - totalsum).toFixed(2);

    if(budget >= totalsum) {
        console.log(`Hey, you have a great garden with ${numFlower} ${flowerType} and ${difference} leva left.`);
    } else {
        console.log(`Not enough money, you need ${difference} leva more.`);
    }
    
}

newHouse("Roses",
55,
250)