function worldSwimmingRecord(recordSeconds, distanceMeters, timePerMeterSeconds) {
    let timeWithoutDelay = distanceMeters * timePerMeterSeconds;
   
    let delay = Math.floor(distanceMeters / 15);
    
    let timeForDelay = delay * 12.5;
    
    let totalTimeSeconds = timeWithoutDelay + timeForDelay;
    
    let differenceFromRecord = Math.abs(recordSeconds - totalTimeSeconds);
    
    if (totalTimeSeconds < recordSeconds) {
        console.log (`Yes, he succeeded! The new world record is ${totalTimeSeconds.toFixed(2)} seconds.`)
    }    else {
        console.log (`No, he failed! He was ${differenceFromRecord.toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord(55555.67,
    3017,
    5.03
)