function shopping(budget, videocardsCount, processorsCount, ramCount) {
    let totalSumVideocards = videocardsCount * 250;
    let totalSumProcessors = processorsCount * (0.35 * totalSumVideocards);
    let totalSumRam = ramCount * (0.10 * totalSumVideocards);
    let totalSum = totalSumProcessors + totalSumRam + totalSumVideocards;

    if (videocardsCount > processorsCount) {
        totalSum = totalSum * 0.85;
    }

    let difference = Math.abs(budget - totalSum);

    if (totalSum > budget) {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`);
    } else {
        console.log(`You have ${difference.toFixed(2)} leva left!`);
    }

}

shopping(920.45, 
    3, 
    1, 
    1)