function sumOfNumbers (strNum) {
    let sum = 0
    

    for (let num = 0; num < strNum.length; num++) {
        let number = strNum[num];
        let x = Number(number);
        sum += x; 
        
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers (`1234`)