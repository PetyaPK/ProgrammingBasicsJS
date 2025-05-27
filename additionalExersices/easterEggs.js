function easterEggs(input) {
    let index = 0;
    let colouredEggsNum = Number(input[index]);
    index++;

    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let maxQuantity = 0;
    let maxColour = "";


    for(let i = 1; i <= colouredEggsNum; i++) {
        let colour = input[index];
        index++;

        if (colour === "red") {
            red++;
        } else if (colour === "orange") {
            orange++;
        } else if (colour === "blue") {
            blue++;
        } else if (colour === "green") {
            green++;
        }

        if (red > blue && red > green && red > orange) {
            maxColour = "red";
            maxQuantity = red;
        } else if (orange > blue && orange > red && orange > green) {
            maxColour = "orange";
            maxQuantity = orange;
        } else if (blue > red && blue > green && blue > orange) {
            maxColour = "blue";
            maxQuantity = blue;
        } else if (green > blue && green > red && green > orange) {
            maxColour = "green";
            maxQuantity = green;
        }
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxQuantity} -> ${maxColour}`);
    
}

easterEggs(["4",
    "blue",
    "red",
    "blue",
    "orange"]) 
    
    
    
    