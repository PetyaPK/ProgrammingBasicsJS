function specialNumbers(num) {
    let buff = "";
    for (let i =1111; i <= 9999; i++) {
        let numAsString = String(i);
        let a = Number(numAsString[0]);
        let b = Number(numAsString[1]);
        let c = Number(numAsString[2]);
        let d = Number(numAsString[3]);

        if (num % a === 0 && num % b === 0 && num % c === 0 && num % d === 0) {
            buff += `${a}${b}${c}${d} `;
        }
    }

    console.log(buff);
    
}

specialNumbers(16)