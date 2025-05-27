function housePainting (x, y, h) {
    let frontBackWallsArea = 2 * (x * x) - (1.2 * 2);
    let sideWallsArea = 2 * (x * y) - (2 * (1.5 * 1.5));
    let roofSideWalls = 2 * (x * y);
    let roofTriangles = 2 * (x * h / 2)

    let areaGreenPaint = frontBackWallsArea + sideWallsArea;
    let greenPaint = areaGreenPaint / 3.4;

    let areaRedPaint = roofSideWalls + roofTriangles;
    let redPaint = areaRedPaint / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
    
    
}

housePainting(6,
    10,
    5.2
    

)