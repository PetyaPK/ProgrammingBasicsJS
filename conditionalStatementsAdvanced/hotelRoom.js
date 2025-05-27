function hotelRoom(month, nightsNum) {
    let apartment = 0
    let studio = 0

    switch(month) {
        case "May":
        case "October":
            if(nightsNum > 14) {
                apartment = (nightsNum * 65) * 0.90;
                studio = (nightsNum * 50) * 0.70;
            } else if (nightsNum > 7) {     
                studio = (nightsNum * 50) * 0.95;
                apartment = nightsNum * 65;
            } else {
                studio = nightsNum * 50;
                apartment = nightsNum * 65;
            }
            break;
        case "June":
        case "September":
            if(nightsNum >14) {
                apartment = (nightsNum * 68.70) * 0.90;
                studio = (nightsNum * 75.20) * 0.80;                
            } else {
                studio = nightsNum * 75.20;
                apartment = nightsNum * 68.70;
            }
            break;
        case "July":
        case "August":
            if(nightsNum >14) {
                apartment = (nightsNum * 77) * 0.90;
                studio = nightsNum * 76;
            } else {
            apartment = nightsNum * 77;
            studio = nightsNum * 76;
            }
            break;
        
    }
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}

hotelRoom ("August",

20)