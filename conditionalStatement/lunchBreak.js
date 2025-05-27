function lunchBreak(seriesName, episodeTime, breackTime) {
    let lunchTime = breackTime / 8;
    let chillTime = breackTime / 4;  
    let leftTime = breackTime - lunchTime - chillTime;
    let time = Math.abs(episodeTime - leftTime);
    let time2 = Math.ceil(time);
    
    if (episodeTime <= leftTime) {
        console.log(`You have enough time to watch ${seriesName} and left with ${time2} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${time2} more minutes.`);
    }
}

lunchBreak("Game of Thrones",
    60,
    96)