function sumNumbers(input) {
    let index = 0
    let num = Number(input[index]);
    index++

    let sum = 0;
    let currentNum = Number(input[index]);

    while (sum < num) {
        sum += currentNum;


        index++;
        currentNum = Number(input[index]);


    }

    console.log(sum);


}

sumNumbers(["100",
    "10",
    "20",
    "30",
    "40"])