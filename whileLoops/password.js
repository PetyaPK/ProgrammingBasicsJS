function password(input) {
    let index = 0;
    let name = input[index];
    index++;
    let correctPass = input[index];
    index++

    let currentPass = input[index]; 

    while(currentPass !== correctPass) {
        index++;
        currentPass = input[index];
    }

    console.log(`Welcome ${name}!`);
}

password(["Nakov",

    "1234",
    
    "Pass",
    
    "1324",
    
    "1234"])