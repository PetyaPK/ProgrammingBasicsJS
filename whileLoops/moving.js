function moving(input) {
    let m3Box = 1 * 1 * 1;
    let index = 0;

    let widthFreeSpace = Number(input[index]);
    index++;
    let lengthFreeSpace = Number(input[index]);
    index++;
    let hightFreeSpace = Number(input[index]);
    index++;

    let freeSpaceM3 = widthFreeSpace * lengthFreeSpace * hightFreeSpace;

    let boxCount = 0;

    let boxVol = 0;
    let difference = 0;


    let command = input[index];
    index++;

    while (command !== "Done") {
        let boxNum = Number(command);

        boxCount += boxNum;

        boxVol = m3Box * boxCount;
        difference = Math.abs(freeSpaceM3 - boxVol);
        

        if (freeSpaceM3 < boxVol) {
            console.log(`No more free space! You need ${difference} Cubic meters more.`);
            break;
        } 

        command = input[index];
        index++;

    }

    if (freeSpaceM3 >= boxVol) {
        console.log(`${difference} Cubic meters left.`);
        
    }
}

moving(["10",

    "1",
    
    "2",
    
    "4",
    
    "6",
    
    "Done"])