function areaFigures (typeFigure, numa, numb) {
    let areaFigures = 0; 

    if (typeFigure === "square") {
        areaFigures = numa * numa; 
    } else if (typeFigure === "rectangle") {
        areaFigures = numa * numb;
    } else if (typeFigure === "circle") {
        areaFigures = Math.PI * numa * numa;
    } else if (typeFigure === "triangle") {
        areaFigures = numa * numb / 2;
    }
    console.log (areaFigures.toFixed(3));
}

areaFigures ("rectangle", 
    7, 
    2.5)