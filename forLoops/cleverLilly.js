function cleverLilly(arg1, arg2, arg3) {
    let age = Number(arg1);
    let waschingmaschinePrice = Number(arg2);
    let toyPrice = Number(arg3);

    let oddYearsToys = 0;
    let evenYearsMoney = 0;
    let additionMoney = 10;

    for (let i = 1; i <= age; i++) {
        if(i % 2 === 0) {
            evenYearsMoney = evenYearsMoney + additionMoney;
            additionMoney += 10;
            evenYearsMoney--;
        } else {
            oddYearsToys++;
        }
    }

    let toySum = oddYearsToys * toyPrice;
    let sum = evenYearsMoney + toySum;

    let diff = Math.abs(sum - waschingmaschinePrice);

    if (sum >= waschingmaschinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLilly(21,
1570.98,
3)