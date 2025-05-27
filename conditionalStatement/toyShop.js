function toyShop(excursionPrice, puzzelCount, dollsCount, teddybearsCount, minionsCount, trucksCount) {
    let totalToysCount = puzzelCount + dollsCount + teddybearsCount + minionsCount + trucksCount;

    let puzzelSum = puzzelCount * 2.6;
    let dollsSum = dollsCount * 3;
    let teddybearsSum = teddybearsCount * 4.1;
    let minionsSum = minionsCount * 8.2;
    let trucksSum = trucksCount * 2;
    
    let totalPrice = puzzelSum + dollsSum + teddybearsSum + minionsSum + trucksSum

    let discount = 0
    if (totalToysCount >= 50) {
        discount = 0.75;
    } else {
        discount = 1;
    }
    
    let discountTotalPrice = totalPrice * discount;

    let rent = discountTotalPrice * 0.10;

    let total = discountTotalPrice - rent;

    let difference = Math.abs (total - excursionPrice);

    if (total >= excursionPrice) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log (`Not enough money! ${difference.toFixed(2)} lv needed.`)
    }
}

toyShop (40.8,
    20,
    25,
    30,
    50,
    10)