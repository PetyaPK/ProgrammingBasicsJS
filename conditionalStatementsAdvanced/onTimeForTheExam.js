function onTimeForTheExam(arg1, arg2, arg3, arg4) {
    let hourExam = Number(arg1);
    let minExam = Number(arg2);
    let hourArrival = Number (arg3);
    let minArrival = Number (arg4);
    

    let timeExam = hourExam * 60 + minExam;
    let timeArrival = hourArrival * 60 + minArrival;

    let diff = Math.abs(timeExam - timeArrival);
    let hours = Math.floor(diff / 60);
    let min = diff % 60;

    if (timeExam > timeArrival && timeExam - timeArrival > 30) {
        console.log("Early");
        if (diff >= 60) {
            if (min < 10) {
                console.log(`${hours}:0${min} hours before the start`);
            } else {
                console.log(`${hours}:${min} hours before the start`);
            }
        } else {
            console.log(`${min} minutes before the start`);
        }
    } else if (timeArrival > timeExam) {
        console.log("Late");    
        if (diff >= 60) {
            if (min < 10) {
                console.log(`${hours}:0${min} hours after the start`);
            } else {
                console.log(`${hours}:${min} hours after the start`);
            }
        } else {
            console.log(`${min} minutes after the start`);
        }

    } else {
        console.log("On time");
        if (min > 0) {
            console.log(`${min} minutes before the start`);
        }
    }


}

onTimeForTheExam(14, 00, 13, 55)