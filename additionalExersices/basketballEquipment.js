function basketballEquipment(yearlyTax) {
    let shoesPrice = yearlyTax * 0.6;
    let equipPrice = shoesPrice * 0.8;
    let ballPrice = equipPrice / 4;
    let accesoaries = ballPrice / 5;

    let fullPrice = yearlyTax + shoesPrice + equipPrice + ballPrice + accesoaries

    let price = Number(fullPrice)
    console.log(price.toFixed(2))
}

basketballEquipment(320)