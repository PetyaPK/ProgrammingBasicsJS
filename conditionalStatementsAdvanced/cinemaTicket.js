function cinemaTicket (weekday) {
    switch (weekday) {
        case `Monday`:
        case `Tuesday`:
        case `Friday`:
            console.log(12);
            break;
        case `Thursday`: 
        case `Wednesday`:
            console.log(14);
            break;
        case `Saturday`:  
        case `Sunday`:
            console.log(16);
            break;       
    }
}

cinemaTicket (`Monday`)