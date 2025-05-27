function vacation(input) {
    let index = 0;
    let vacationPrice = Number(input[index]);
    index++;
    let currentMoney = Number(input[index]);
    index++;
    
    let spendDaysCount = 0;
    let daysCount = 0; 
    let isPossibleToSaveMoney = true;

    while (vacationPrice > currentMoney ) {
        daysCount++

        let action = input[index];
        index++


        let moneyToUse = Number(input[index]);
        index++;

        switch(action) {
            case "spend":
            currentMoney -= moneyToUse;
            spendDaysCount++;
            if (currentMoney < 0) {
                currentMoney = 0;
            }
                break;
            case "save":
            currentMoney += moneyToUse;
            spendDaysCount = 0;
                break;
        }

        if (spendDaysCount === 5) {
            console.log(`You can't save the money.`);
            console.log(`${daysCount}`);   
            isPossibleToSaveMoney = false;         
            break;
        }
       
    }

    if (isPossibleToSaveMoney) {
    console.log(`You saved the money for ${daysCount} days.`);
    }

}


vacation(["2000",

    "1000",
    
    "spend",
    
    "1200",
    
    "save",
    
    "2000"])