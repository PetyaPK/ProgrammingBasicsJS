function tennisRanking(input) {
    let index = 0

    let tournamentsNum = Number (input[index]);
    index++;
    let rankingPoints = Number (input[index]);
    index++;
  
    let points = 0;
    let winCount = 0;

    for(let i = 0; i < tournamentsNum; i++) {
        let result = input[index];
        index++;

        switch(result) {
            case("W"):
                points +=2000;
                winCount++;
                break;
            case("F"):
                points +=1200;
                break;
            case("SF"):
                points +=720;
                break;
        }
    }
    let sumPoints = points + rankingPoints;
    let avgPoints = Math.floor(points / tournamentsNum);
    let pWin = winCount / tournamentsNum * 100;

    console.log(`Final points: ${sumPoints}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${pWin.toFixed(2)}%`);
    
}

//points/tournamentsnum
//
tennisRanking(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])