function equalSumsEvenOddPosition(firstNum, seondNum) {
    let start = Number(firstNum);
    let end = Number(seondNum);
    let buff = "";

    for (let i = start; i <=end; i++) {
        let numAsString = String(i);
        let evenSum = 0;
        let oddSum = 0;

        for (let x = 0; x < numAsString.length; x++) {
            let num = Number(numAsString[x]);
            if (x % 2 === 0) {
                evenSum += num;
            } else {
                oddSum += num;
            }
        }
        if (evenSum === oddSum) {
            buff += numAsString + " ";
            
        }
    }

    console.log(buff);
    
}

equalSumsEvenOddPosition("100000",

    "100050")