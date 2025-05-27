function bonusScore(entryPoints) {
    let bonus1 = 0.0
    if (entryPoints <= 100) {
        bonus1 = 5;
    } else if (entryPoints <=1000) {
        bonus1 = entryPoints * 0.2;
    } else if (entryPoints >1000) {
        bonus1 = entryPoints *0.1;
    }

    let bonus2 = 0.0
    if (entryPoints % 2 == 0) {
        bonus2 = 1;
    } else if (entryPoints % 10 == 5) {
        bonus2 = 2
    }

    let totalBonus = bonus1 + bonus2;
    let totalPoints = entryPoints + bonus1 + bonus2;

    console.log (totalBonus);
    console.log (totalPoints);
}

bonusScore (20)