function fishland (skumriyaPrice, cacaPrice, palamudKg, safridKg, midiKg) {
    let palamudPrice = skumriyaPrice * 1.6;
    let safridPrice = cacaPrice * 1.8;

    let palamud = palamudKg * palamudPrice;
    let safrid = safridKg * safridPrice;
    let midi = midiKg * 7.50;
    let all = palamud  + safrid + midi;
    console.log(all.toFixed(2));
    
}

fishland(6.90,
    4.20,
    1.5,
    2.5,
    1
    )