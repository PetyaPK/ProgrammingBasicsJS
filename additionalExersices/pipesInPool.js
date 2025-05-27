function pipesInPool(V, P1, P2, H) {
    let pipe1Volume = P1 * H;
    let pipe2Volume = P2 * H;
    let volumeAll = pipe1Volume + pipe2Volume;
    let percenageFull = (volumeAll / V) * 100;
    let p1Percentage = (pipe1Volume / volumeAll) * 100;
    let p2Percentage = (pipe2Volume / volumeAll) * 100;
    let diff = volumeAll - V;


    if (volumeAll <= V) {
        console.log(`The pool is ${percenageFull.toFixed(2)}% full. Pipe 1: ${p1Percentage.toFixed(2)}%. Pipe 2: ${p2Percentage.toFixed(2)}%.`);
    } else if (volumeAll > V) {
        console.log(`For ${H.toFixed(2)} hours the pool overflows with ${diff.toFixed(2)} liters.`);
    }
}

pipesInPool(100,
    100,
    100,
    2.5
    )