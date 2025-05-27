function skeleton(minutesQuota, secondsQuota, curveLength, secondsPer100M) {
    let minToSecQuota = minutesQuota * 60;
    let totalSecQuota = minToSecQuota + secondsQuota;

    let delay = (curveLength / 120) * 2.5;

    let time = (curveLength / 100) * secondsPer100M;
    let totalTimeMarin = time - delay;

    let difference = Math.abs(totalSecQuota - totalTimeMarin);

    if (totalTimeMarin <= totalSecQuota) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${totalTimeMarin.toFixed(3)}.`);        
    } else { 
        console.log(`No, Marin failed! He was ${difference.toFixed(3)} second slower.`)
    }

}  

skeleton(2,
    12,
    1200,
    10
    )