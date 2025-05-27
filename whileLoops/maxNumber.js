function maxNumber(input) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let command = input[index];

    while(command !== "Stop") {
        let num = Number(command);
        if (num > maxNum) {
            maxNum = num;
        }

        index++;
        command = input[index];
    }

    console.log(maxNum);
    
}

maxNumber(["-10", "20", "-30", "Stop"])