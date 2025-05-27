function gymnastics(country, tool) {
    let difficultyGrade = 0;
    let performanceGrade = 0;
    

    switch(country) {
        case "Russia":
            if(tool === "ribbon") {
                difficultyGrade = 9.100;
                performanceGrade = 9.400;
            } else if(tool === "hoop") {
                difficultyGrade = 9.300;
                performanceGrade = 9.800;
            } else if(tool === "rope") {
                difficultyGrade = 9.600;
                performanceGrade = 9.000;
            }
            break;
        case "Bulgaria":
            if(tool === "ribbon") {
                difficultyGrade = 9.600;
                performanceGrade = 9.400;
            } else if(tool === "hoop") {
                difficultyGrade = 9.550;
                performanceGrade = 9.750;
            } else if(tool === "rope") {
                difficultyGrade = 9.500;
                performanceGrade = 9.400;
            }
            break;
        case "Italy":
            if(tool === "ribbon") {
                difficultyGrade = 9.200;
                performanceGrade = 9.500;
            } else if(tool === "hoop") {
                difficultyGrade = 9.450;
                performanceGrade = 9.350;
            } else if(tool === "rope") {
                difficultyGrade = 9.700;
                performanceGrade = 9.150;
            }
            break;
    }

    let finalGrade = difficultyGrade + performanceGrade;
    
    let pDeficit = (20 - finalGrade) / 20 * 100;
      

    console.log(`The team of ${country} get ${finalGrade.toFixed(3)} on ${tool}.`);
    console.log(`${pDeficit.toFixed(2)}%`);
    
}

gymnastics("Bulgaria",
    "ribbon"
    )