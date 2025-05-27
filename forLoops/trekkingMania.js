function trekkingMania(input) {
    let index = 0;

    let groupCount = Number(input[index]);
    index++;

    let allCount = 0;

    let musalaCount = 0;
    let montblanCount = 0;
    let kilimandzharoCount = 0;
    let k2Count = 0;
    let everestCount = 0;


    for(let i = 0; i < groupCount; i++ ) {
        let groupPeople = Number(input[index]);
        index++;
        
        allCount +=groupPeople;

        if(groupPeople <= 5) {
            musalaCount +=groupPeople;
        } else if(groupPeople <= 12) {
            montblanCount +=groupPeople;
        } else if(groupPeople <= 25) {
            kilimandzharoCount +=groupPeople;
        } else if(groupPeople <= 40) {
            k2Count +=groupPeople;
        } else if(groupPeople > 40) {
            everestCount +=groupPeople
        }
    }

    let pMusala = musalaCount / allCount * 100;
    let pMontblan = montblanCount / allCount * 100;
    let pKilimandzharo = kilimandzharoCount / allCount * 100;
    let pK2 = k2Count / allCount * 100;
    let pEverest = everestCount / allCount * 100;

    console.log(pMusala.toFixed(2) + `%`);
    console.log(pMontblan.toFixed(2) + `%`);
    console.log(pKilimandzharo.toFixed(2) + `%`);
    console.log(pK2.toFixed(2) + `%`);
    console.log(pEverest.toFixed(2) + `%`);
    
    
}

trekkingMania(["5",

    "25",
    
    "41",
    
    "31",
    
    "250",
    
    "6"])