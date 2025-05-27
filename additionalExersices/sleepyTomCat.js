function sleepyTomCat(holidays) {
    let workdays = 365 - holidays;
    let workdaysPlayMinutes = workdays * 63;
    let holidaysPlayMinutes = holidays * 127;
    let allPlayMinutes = workdaysPlayMinutes + holidaysPlayMinutes;
    let diff = 30000 - allPlayMinutes;
   
    if (diff < 0) {
        console.log(`Tom will run away`);
        let diff1 = Math.abs(diff)
        let H = Math.floor(diff1 / 60);
        let M = diff1 % 60
        console.log(`${H} hours and ${M} minutes more for play`);
    } else if (diff > 0) {
        let H = Math.floor(diff / 60);
        let M = diff % 60
        console.log(`Tom sleeps well`);
        console.log(`${H} hours and ${M} minutes less for play`);
    }

}

sleepyTomCat(20)