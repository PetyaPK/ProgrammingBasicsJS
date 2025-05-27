function trainTheTrainers(input) {
    let index = 0;
    let jouryCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let count = 0;
    let sumGrade = 0;

    while (command !== "Finish") {
        count++;
        let presentationName = command;
        let currentGradeSum = 0;

        for (let i = 0; i < jouryCount; i++) {
            let grade = Number(input[index]);
            index++;

            currentGradeSum += grade;
        }

        let currentAverage = currentGradeSum / jouryCount;
        sumGrade += currentAverage;
        console.log(`${presentationName} - ${currentAverage.toFixed(2)}.`);
        
        command = input[index];
        index++;
    }

    let avg = sumGrade / count;
    console.log(`Student's final assessment is ${avg.toFixed(2)}.`);
    
        
}

trainTheTrainers(["2",

    "While-Loop",
    
    "6.00",
    
    "5.50",
    
    "For-Loop",
    
    "5.84",
    
    "5.66",
    
    "Finish"])