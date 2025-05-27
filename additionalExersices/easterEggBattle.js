function easterEggBattle(input) {
    let index = 0;

    let firstPlayerEggs = Number(input[index]);
    index++;
    let secondPlayerEggs = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    while (command !== "End") {
        let winner = command;

        if (winner === "one") {
            secondPlayerEggs--;
        } else if (winner === "two") {
            firstPlayerEggs--;
        }

        if (firstPlayerEggs === 0) {
            console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
            return;
        }
        if (secondPlayerEggs === 0) {
            console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
            return;
        }
        command = input[index];
        index++;

    }

    console.log(`Player one has ${firstPlayerEggs} eggs left.`);
    console.log(`Player two has ${secondPlayerEggs} eggs left.`);
    
    
    
}

easterEggBattle(["6",
    "3",
    "one",
    "two",
    "two",
    "one",
    "one"])
    
    
    