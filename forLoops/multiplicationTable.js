function multiplicationTable(arg1) {
    let x = Number (arg1);
    let result = 0;

    for (let i = 1; i <= 10; i++) {
        result = i * x;
        console.log (`${i} * ${x} = ${result}`);
    }
}

multiplicationTable(5)