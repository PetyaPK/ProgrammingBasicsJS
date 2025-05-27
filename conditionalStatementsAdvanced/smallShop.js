function smallShop (product, city, quantity) {
    switch (city) {
        case `Sofia`:
            if (product === `coffee`) {
                console.log(quantity * 0.50);
            } else if (product === `water`) {
                console.log(quantity * 0.80);
            } else if (product === `beer`) {
                console.log(quantity * 1.20);                
            } else if (product === `sweets`) {
                console.log(quantity * 1.45)
            } else if (product === `peanuts`) {
                console.log(quantity * 1.60);
            }
            break;
        case `Plovdiv`:
            if (product === `coffee`) {
                console.log(quantity * 0.40);
            } else if (product === `water`) {
                console.log(quantity * 0.70);
            } else if (product === `beer`) {
                console.log(quantity * 1.15);                
            } else if (product === `sweets`) {
                console.log(quantity * 1.30)
            } else if (product === `peanuts`) {
                console.log(quantity * 1.50);
            }
            break;
        case `Varna`:
            if (product === `coffee`) {
                console.log(quantity * 0.45);
            } else if (product === `water`) {
                console.log(quantity * 0.70);
            } else if (product === `beer`) {
                console.log(quantity * 1.10);                
            } else if (product === `sweets`) {
                console.log(quantity * 1.35)
            } else if (product === `peanuts`) {
                console.log(quantity * 1.55);
            }
            break;
    }
}

smallShop (`coffee`,
    `Varna`,
    2)