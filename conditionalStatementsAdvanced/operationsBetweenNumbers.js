function operationsBetweenNumbers(num1, num2, operator) {
    let N1 = Number (num1);
    let N2 = Number (num2);
    let result = 0
    
    switch(operator) {
        case "+":
            result = N1 + N2;
            if(result % 2 === 0) {
                console.log(`${N1} + ${N2} = ${result} - even`);
            } else {
                console.log(`${N1} + ${N2} = ${result} - odd`);
            }
            break;
        case "-":
            result = N1 - N2;
            if(result % 2 === 0) {
            console.log(`${N1} - ${N2} = ${result} - even`);
            } else {
            console.log(`${N1} - ${N2} = ${result} - odd`);
            }
            break;
        case "*":
            result = N1 * N2;
            if(result % 2 === 0) {
            console.log(`${N1} * ${N2} = ${result} - even`);
            } else {
            console.log(`${N1} * ${N2} = ${result} - odd`);
            }
            break;
        case "/":
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                result = N1 / N2; 
                console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                result = N1 % N2; 
                console.log(`${N1} % ${N2} = ${result}`); 
            }
        }

}

operationsBetweenNumbers(7,

    3,
    
    "*")