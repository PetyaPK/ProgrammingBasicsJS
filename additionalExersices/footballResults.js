function footballResults(firstPlayScore, secondPlayScore, thirdPlayScore) {
    let hostScore1 = Number(firstPlayScore.charAt(0));
    let guestScore1 = Number(firstPlayScore.charAt(2));
    let hostScore2 = Number(secondPlayScore.charAt(0));
    let guestScore2 = Number(secondPlayScore.charAt(2));
    let hostScore3 = Number(thirdPlayScore.charAt(0));
    let guestScore3 = Number(thirdPlayScore.charAt(2));

    let winCount = 0;
    let lostCount = 0;
    let equalCount = 0;

    if(hostScore1 > guestScore1) {
        winCount++;
    } else if (hostScore1 < guestScore1) {
        lostCount++;
    } else if(hostScore1 === guestScore1) {
        equalCount++;
    }
    
    if(hostScore2 > guestScore2) {
        winCount++;
    } else if (hostScore2 < guestScore2) {
        lostCount++;
    } else if(hostScore2 === guestScore2) {
        equalCount++;
    }

    if(hostScore3 > guestScore3) {
        winCount++;
    } else if (hostScore3 < guestScore3) {
        lostCount++;
    } else if(hostScore3 === guestScore3) {
        equalCount++;
    }


    console.log(`Team won ${winCount} games.`);
    console.log(`Team lost ${lostCount} games.`);
    console.log(`Drawn games: ${equalCount}`);

}

footballResults(`0:0`,
    `2:2`,
    `1:1`
    )