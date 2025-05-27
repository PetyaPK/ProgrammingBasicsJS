function basketballTournament(input) {
    let index = 0;

    let gameCounter = 0;

    while (index < input.length) {
        gameCounter++;
        let tournamentName = input[index];
        index++;

        if (tournamentName === "End of tournaments") {
            console.log(``);
            console.log(``);           
            break;
        }

        let gameNumbers = Number(input[index]);
        index++;
        

    }
}

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

basketballTournament(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"])