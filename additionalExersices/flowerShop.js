function flowerShop(magnoliiNum, zumbulNum, rosesNum, cactusesNum, presentPrice) {
    let magnoliiSum = magnoliiNum * 3.25;
    let zumbuliSum = zumbulNum * 4;
    let rosesSum = rosesNum * 3.5;
    let cactusesSum = cactusesNum * 8;
    let allSum = (magnoliiSum + zumbuliSum + rosesSum + cactusesSum) * 0.95;
    let diff = allSum - presentPrice;

    if (allSum >= presentPrice) {
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else if (allSum < presentPrice) {
        console.log(`She will have to borrow ${Math.ceil(Math.abs(diff))} leva.`);
    }

}

flowerShop(15,
    7,
    5,
    10,
    100
    
    )