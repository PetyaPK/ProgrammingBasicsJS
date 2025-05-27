function sumOfNumbers(intBasis, intEnd, magicNum) {
    let isFound = false;
    let combinationCount = 0;

    for (let num1 = intBasis; num1 <= intEnd; num1++) {
        for (let num2 = intBasis; num2 <= intEnd; num2++) {
            combinationCount++;
            let result = num1 + num2;
            if (result === magicNum) {

                console.log(`Combination N:${combinationCount} (${num1} + ${num2} = ${magicNum})`);
                isFound = true;
                break;
            }
        }

        if (isFound) {
            break
        }
    }

    if (!isFound) {
        console.log(`${combinationCount} combinations - neither equals ${magicNum}`);
        
    }
}

sumOfNumbers(1,

    10,

    5)