function cinema(projectionType, rowNum, columnNum) {
    let income = 0;

    switch(projectionType) {
        case("Premiere"):
        income = (rowNum * columnNum * 12.00).toFixed(2);
        break;
        case("Normal"):
        income = rowNum * columnNum * 7.50;
        break;
        case("Discount"):
        income = rowNum * columnNum * 5.00;
        break;
    }
    console.log(`${income.toFixed(2)} leva`);
}

cinema ("Premiere",
10,
12)