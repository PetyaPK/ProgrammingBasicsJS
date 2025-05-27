function sumSeconds(time1, time2, time3) {
    let totalTime = time1 + time2 + time3;
    
    let Minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log (`${Minutes}:0${seconds}`);
    } else {
        console.log (`${Minutes}:${seconds}`);
    }
    
}

sumSeconds (35,
    45,
    44)