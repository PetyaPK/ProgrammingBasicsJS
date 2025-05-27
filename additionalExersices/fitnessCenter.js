function fitnessCenter(input) {
    let index = 0;

    let fitnesPeopleNum = Number(input[index]);
   
    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let proteinshakeCount = 0;
    let proteinbarCount = 0;

    for(let i = 0; i < fitnesPeopleNum; i++) {
        index++
        let excersise = input[index];

        switch(excersise) {
            case "Back":
                backCount++;
                break;
            case "Chest":
                chestCount++;
                break;
            case "Legs":
                legsCount++;
                break;
            case "Abs":
                absCount++;
                break;
            case "Protein shake":
                proteinshakeCount++;
                break;
            case "Protein bar":
                proteinbarCount++;
                break;
        }
        }

    let allWorkOutPeople = backCount + chestCount + legsCount + absCount;
    let allProteinPeople = proteinshakeCount + proteinbarCount;

    let pWorkOut = allWorkOutPeople / fitnesPeopleNum * 100;
    let pProtein = allProteinPeople / fitnesPeopleNum * 100;

console.log(`${backCount} - back`);
console.log(`${chestCount} - chest`);
console.log(`${legsCount} - legs`);
console.log(`${absCount} - abs`);
console.log(`${proteinshakeCount} - protein shake`);
console.log(`${proteinbarCount} - protein bar`);
console.log(`${pWorkOut.toFixed(2)}% - work out`);
console.log(`${pProtein.toFixed(2)}% - protein`);

}


fitnessCenter([7,
    "Chest",
    "Back",
    "Legs",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar"]
    
    )