function examPreparation(input) {
    let index = 0;
    let fairGradesNum = Number(input[index]);
    index++;

    let sumGrades = 0;
    let gradeCount = 0;
    let fairGradesCount = 0;
    let nameTask = "";
    let isNeedABreak = false;
    let grade = 0;

    let command = input[index];
    index++;

    while (command !== "Enough") {
        nameTask = command;
        grade = Number(input[index]);
        index++;

        sumGrades += grade;
        gradeCount++;

        if (grade <= 4) {
            fairGradesCount++;
        } 

        if (fairGradesCount === fairGradesNum) {
            isNeedABreak = true;
            console.log(`You need a break, ${fairGradesCount} poor grades.`);
            break;
        }

        command = input[index];
        index++;

    }

    let average = sumGrades / gradeCount;
    if (!isNeedABreak) {
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${nameTask}`);
    }


}

examPreparation(["3",

    "Money",

    "6",

    "Story",

    "4",

    "Spring Time",

    "5",

    "Bus",

    "6",

    "Enough"])