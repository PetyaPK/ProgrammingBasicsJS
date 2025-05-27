function transportPrice(n, time) {
    let sum = 0;

    if (n < 20) {
        switch (time) {
            case "day":
                sum = 0.70 + (0.79 * n);
                break;
            case "night":
                sum = 0.70 + (0.90 * n);
                break;
        }
    } else if (n >= 20 && n < 100) {
        sum = 0.09 * n;
    } else if (n >= 100) {
        sum = 0.06 * n;
    }

    console.log(sum.toFixed(2));
    
}

transportPrice(7,
    "night"
    )