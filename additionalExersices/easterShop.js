function easterShop(input) {
    let index = 0;
    let eggsQuantityInStore = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let allSelledEggs = 0;
    let eggs = 0;

    while (command !== "Close") {
        let action = command;
        let eggsNumAction = Number(input[index]);
        index++;

        if (eggsQuantityInStore < eggsNumAction && action === "Buy") {
            console.log(`Not enough eggs in store!`);
            console.log(`You can buy only ${eggsQuantityInStore}.`);
            return;
        }

        if (action === "Buy") {
            eggsQuantityInStore -= eggsNumAction;
            allSelledEggs += eggsNumAction;
        }

        if (action === "Fill") {
            eggsQuantityInStore += eggsNumAction;
        }

        command = input[index];
        index++;
    }


    console.log(`Store is closed!`);
    console.log(`${allSelledEggs} eggs sold.`);
}

easterShop(["13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"])
    



