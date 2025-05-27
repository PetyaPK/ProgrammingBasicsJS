function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let sumGrade = 0;
    let fails = 0

    let grade = Number(input[index]);
    let currenClass = 1;

    while (currenClass <= 12) {
        sumGrade += grade;

        if (grade >= 4) {
            currenClass++;
        } else {
            fails++;
        }
            if (fails > 1) {
                console.log(`${name} has been excluded at ${currenClass} grade`);
                break;
            }
        

        index++;
        grade = Number(input[index]);

        }
    
    
    let averageGrade = sumGrade / 12;
    if (fails <= 1) {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}


graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])