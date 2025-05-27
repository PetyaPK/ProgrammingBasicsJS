function minNumber(input) {
    minNum = Number.MAX_SAFE_INTEGER

    index = 0;
    let command = input[index];

    while (command !== "Stop") {
        let num = Number(command);
    
        if(num < minNum) {
            minNum = num;
        }

        index++;
        command = input[index];

    }

    console.log(minNum);
}

minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])