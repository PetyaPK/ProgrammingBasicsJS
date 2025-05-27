function walking(input) {
    let target = 10000;

    let index = 0;
    let command = input[index];
    index++; 

    let sumSteps = 0; 

    while (command !== "Going home") {
        let currentSteps = Number(command);
        
        sumSteps += currentSteps;
        

        if (sumSteps >= target) {
            break;
        }


        command = input[index];
        index++;
    }

    if (command === "Going home") {
        let finalSteps = Number(input[index]);
        sumSteps += finalSteps;
    }

    let difference = Math.abs(target - sumSteps);
    if (sumSteps >= target) {
        console.log(`Goal reached! Good job!`);
        console.log(`${difference} steps over the goal!`);
    } else {
        console.log(`${difference} more steps to reach goal.`);
        
    }
    
}

walking(["125", "250", "4000", "30", "2678", "4682"])