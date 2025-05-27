function salary(input) {
    let index = 0

    let n = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let fine = 0;

    for(let i = 0; i < n; i++) {
        let website = input[index];
        index++;

        switch(website) {
            case "Facebook":
                fine -= 150;
                break;
            case "Instagram":
                fine -= 100;
                break;
            case "Reddit":
                fine -= 50;
                break;
        }
    }
   
    
    
    let balance = salary + fine;
    
    
    if (balance <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(balance.toFixed(0));
    }
}


salary([3,
    500,
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"])