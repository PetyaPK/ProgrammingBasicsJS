function godzillaKong(budget, numberPerson, priceClothesPerPerson) {
    let decor = budget * 0.1;
    
    let totalPriceClothes = priceClothesPerPerson * numberPerson;
    let discount = 0
    if (numberPerson > 150) {
       discount = 0.9
    } else {
        discount = 1;
    }
    let discountTotalPriceClothes = totalPriceClothes * discount
    

    let totalExpenses = discountTotalPriceClothes + decor;

    let difference = Math.abs(budget - totalExpenses);

    if (totalExpenses > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
        
    }
}

godzillaKong (20000,
    120,
    55.5)