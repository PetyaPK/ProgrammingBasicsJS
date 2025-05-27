function vegetableMarket(vegetablesPrice, fruitsPrice, kgAllVegetables, kgAllFruits) {
    let vegetablesAll = vegetablesPrice * kgAllVegetables;
    let fruitsAll = fruitsPrice * kgAllFruits;
    let lvAll = vegetablesAll + fruitsAll;
    let euroAll = lvAll / 1.94;
    console.log(euroAll.toFixed(2));
    
}

vegetableMarket(1.5,
    2.5,
    10,
    10
    )