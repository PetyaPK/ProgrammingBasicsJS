function weatherForecast2(gradeC) {
    let grade = Number(gradeC)
    if (grade >= 26 && grade <=35) {
        console.log('Hot');
    } else if (grade > 20 && grade < 26) {
        console.log(`Warm`);
    } else if (grade >= 15 && grade <= 20 ) {
        console.log(`Mild`);
    } else if (grade >= 12 && grade < 15) {
        console.log(`Cool`);
    } else if (grade >= 5 && grade < 12) {
        console.log(`Cold`);
    } else {
        console.log(`unknown`);
    }
}

