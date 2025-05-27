function divisibleNumsBy9 (num1, num2){
    let sum = 0;
    let allNums = ``;

    for (let currentNum = num1; currentNum <= num2; currentNum++) {
        if (currentNum % 9 === 0) {
            allNums +=currentNum + `\n`;
            sum += currentNum;
        }
    }

    console.log (`The sum: ${sum}`);
    console.log (allNums);
    
    
}

divisibleNumsBy9 (100, 200)