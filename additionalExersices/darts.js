function darts(input) {
    let initialPoints = 301;
    let index = 0;
    let playerName = input[index];
    index++;

    let successfullShots = 0;
    let unsuccessfullShots = 0;


    while (input[index] !== "Retire") {
        let domain = input[index];
        index++;
        let points = Number(input[index]);
        index++;

        let domainPointsSum = 0;

        switch (domain) {
            case "Single":
                domainPointsSum = points * 1;
                break;
            case "Double":
                domainPointsSum = points * 2;
                break;
            case "Triple":
                domainPointsSum = points * 3;
                break;
        }

        if (domainPointsSum <= initialPoints) {
            initialPoints -= domainPointsSum;
            successfullShots++;
        } else {
            unsuccessfullShots++;
        }

        if (initialPoints === 0) {
            console.log(`${playerName} won the leg with ${successfullShots} shots.`);
            return;
        }

    }
    
    console.log(`${playerName} retired after ${unsuccessfullShots} unsuccessful shots.`);
    

}

darts(["Rob Cross",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20",
    "Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])

    
    