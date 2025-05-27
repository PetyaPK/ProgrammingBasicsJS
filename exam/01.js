function roomPainting(paintBoxes, rolls, pricePerGloves, pricePerBrush) {
    let pricePaint = 21.50 * paintBoxes;
    let priceRolls = 5.20 * rolls;

    let glovesQuantity = Math.ceil(rolls * 0.35);
    let priceGlovesAll = glovesQuantity * pricePerGloves;

    let brushesQuantity = Math.floor(paintBoxes * 0.48);
    let priceBrushesAll = brushesQuantity * pricePerBrush;

    let priceAll = pricePaint + priceRolls + priceGlovesAll + priceBrushesAll;
    let delivery = priceAll / 15;

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);
    
}

roomPainting(10,
    8,
    2.2,
    5,
    
    )