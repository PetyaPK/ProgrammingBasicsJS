function tennisEquipment(tennisRocketPrice, tennisRocketNum, shoesNum) {
    let rocketsSum = tennisRocketNum * tennisRocketPrice;
    let shoePrice = tennisRocketPrice / 6;
    let shoesSum = shoesNum * shoePrice;
    let totalRocketShoesSum = rocketsSum + shoesSum;
    let additionalEquipmentSum = totalRocketShoesSum * 0.2;

    let totalEquipmentSum = totalRocketShoesSum + additionalEquipmentSum;

    let priceDjokovic = Math.floor(totalEquipmentSum / 8);
    let priceSponsors = Math.ceil((totalEquipmentSum / 8) * 7);

    console.log(`Price to be paid by Djokovic ${priceDjokovic}`)
    console.log(`Price to be paid by sponsors ${priceSponsors}`)

}

tennisEquipment(386,
    7,
    4
    )