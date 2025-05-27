function travelling(input) {
    let index = 0;

    while (index < input.length) {
        let destination = input[index];
        index++;

        if (destination === "End") {
            break;
        }

        let vacationBudget = Number(input[index]);
        index++;
        let savedMoney = 0;

        while (savedMoney < vacationBudget) {
            savedMoney += Number(input[index]);
            index++;
        }
        
        console.log(`Going to ${destination}!`);
        
    }

}

travelling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])