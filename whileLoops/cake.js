function cake(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;

    let allPieces = w * l;

    let piecesCount = 0;
    console.log(piecesCount);
    
    
    let diff = 0

    let command = input[index];
    index++;

    while (command !== "STOP") {
        let piecesNum = Number(command);

        piecesCount += piecesNum;

        diff = Math.abs(piecesCount - allPieces);

        if (piecesCount > allPieces) {
            console.log(`No more cake left! You need ${diff} pieces more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (piecesCount < allPieces) {
        console.log(`${diff} pieces are left.`);
    }

}

cake(["10",

    "2",
    
    "2",
    
    "4",
    
    "6",
    
    "STOP"])