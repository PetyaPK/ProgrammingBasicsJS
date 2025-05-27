function accountBalance(input) {
    let sum = 0;
    index = 0;
    let command = Number(input[index]);

    while(command !== `NoMoreMoney`){
        let moneyToAdd = Number(command);

        if(moneyToAdd < 0) {
            console.log("Invalid operation!");
            break;
        }
       
        sum += moneyToAdd;
        
        console.log(`Increase: ${moneyToAdd.toFixed(2)}`);

        index++
        command = input[index];

    }
   
    console.log(`Total: ${sum.toFixed(2)}`);

    
}

accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])