function time15Minutes (arg1, arg2) {
    let h = Number(arg1);
    let m = Number(arg2);
    
    m = m + 15;

    if (m > 59) {
        h = h + 1;
        m = m - 60;
    }

    if (h > 23) {
        h = 0
    }

    if (m >= 10) {
        console.log (`${h}:${m}`);
    } else {
        console.log (`${h}:0${m}`);
    }

    
}

time15Minutes(23,
    46
)