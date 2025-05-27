function cinema(input) {
    let index = 0;
    let hallCapacity = Number(input[index]);
    index++;

    let income = 0;
    let allPeopleEntering = 0;
    let leftSeats = 0;
    let moduleCurrentPeopleDivideCount = 0;



    let command = input[index];
    index++;

    while (command !== "Movie time!") {

        let currenEnteringPeople = Number(command);
        
        if (allPeopleEntering + currenEnteringPeople > hallCapacity) {
            console.log(`The cinema is full.`);
            console.log(`Cinema income - ${income} lv.`);
            return;
        }

        allPeopleEntering += currenEnteringPeople;

        leftSeats = hallCapacity - allPeopleEntering;

        if (currenEnteringPeople % 3 === 0) {
            moduleCurrentPeopleDivideCount++;
            income = allPeopleEntering * 5 - moduleCurrentPeopleDivideCount * 5;
        } else {
            income = allPeopleEntering * 5;
        }

        // if(leftSeats < currenEnteringPeople) {
        //     console.log(`The cinema is full.`);
        //     console.log(`Cinema income - ${income} lv.`);
        //     return;
        // }
            command = input[index];
            index++;
    }


    console.log(`There are ${leftSeats} seats left in the cinema.`);
    console.log(`Cinema income - ${income} lv.`);
}

cinema(["60",
    "10",
    "6",
    "3",
    "20",
    "15",
    "Movie time!"])
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    