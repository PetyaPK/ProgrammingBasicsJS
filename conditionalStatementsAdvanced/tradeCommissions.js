function tradeCommissions (city, salesNum) {
    let commission = 0
    switch (city) {
        case `Sofia`:
            if (salesNum >= 0 && salesNum <= 500) {
                commission = (salesNum * 0.05).toFixed(2);
                console.log(commission);
            } else if (salesNum > 500 && salesNum <= 1000) {
                        commission = (salesNum * 0.07).toFixed(2);
                        console.log(commission);
            } else if (salesNum > 1000 && salesNum <= 10000) {
                        commission = (salesNum * 0.08).toFixed(2);
                        console.log(commission);
            } else if (salesNum > 10000) {
                        commission = (salesNum * 0.12).toFixed(2);
                        console.log(commission);
            } else {
                console.log(`error`);
            }
            break;
        case (`Varna`):
            if (salesNum >= 0 && salesNum <= 500) {
                commission = (salesNum * 0.045).toFixed(2); 
                console.log(commission);
            } else if (salesNum > 500 && salesNum <= 1000) {
                        commission = (salesNum * 0.075).toFixed(2);
                        console.log(commission);
            } else if (salesNum > 1000 && salesNum <= 10000) {
                        commission = (salesNum *0.10).toFixed(2);
                        console.log(commission);
            } else if (salesNum > 10000) {
                        commission = (salesNum * 0.13).toFixed(2);
                        console.log(commission);
            } else {
                console.log(`error`);  
            }
            break; 
        case (`Plovdiv`):
            if (salesNum >= 0 && salesNum <= 500) {
                commission = (salesNum * 0.055).toFixed(2);
                console.log(commission);
            } else if (salesNum > 500 && salesNum <= 1000) {
                        commission = (salesNum * 0.08).toFixed(2);
                        console.log(commission);
            } else if (salesNum > 1000 && salesNum <= 10000) {
                        commission = (salesNum *0.12).toFixed(2);
                        console.log(commission);
            } else if (salesNum > 10000) {
                        commission = (salesNum * 0.145).toFixed(2);
                        console.log(commission);
            } else {
                console.log(`error`);
            }
            break;
        
        default:
            console.log(`error`);
            break;
        }          
    }

tradeCommissions ("Sofia",
-2)