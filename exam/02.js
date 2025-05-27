function spaceship(widthShip, lengthShip, hightShip, hightAstronauts) {
    let shipVolume = widthShip * lengthShip * hightShip;
    let rommVolume = 2 * 2 * (hightAstronauts + 0.40);

    let astronautsCount = Math.floor(shipVolume / rommVolume);

    if (astronautsCount >= 3 && astronautsCount <= 10) {
        console.log(`The spacecraft holds ${astronautsCount} astronauts.`);
    } else if (astronautsCount < 3) {
        console.log(`The spacecraft is too small.`);
    } else {
        console.log(`The spacecraft is too big.`);
    }

}

spaceship(3,
    3,
    4,
    1.68
    
    
    )