function oscars(input) {
    let index = 0;

    let nameActor = input[index];
    index++;
    let points = Number (input[index]);
    index ++;
    let judgeCount = Number (input[index]);
    index++;

        for (let i = 0; i < judgeCount; i++ ) {
            let judgeName = input[index];
            index++;
            let judgeGrade = Number(input[index]);
            index++;
            let judgePoints = judgeName.length * judgeGrade / 2;
            
            points +=judgePoints

            if (points > 1250.5) {
                break;
            }
        }

    let diff = 1250.5 - points;
    
    if(points > 1250.5) {
    console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
    }

}

oscars(["Zahari Baharov",
    "205",
    4,
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])