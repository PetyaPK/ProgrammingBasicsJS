function movieRating(input) {
    let index = 0;
    let movieNumber = Number(input[index]);
    index++;

    let sumRatings = 0;
    let highestRating = 0;
    let highestRatedMovie = "";
    let lowestRating = 10;
    let lowestRatedMovie = "";


    while (index < input.length) {
        let movieName = input[index];
        index++;
        let movieRating = Number(input[index]);
        index++;

        if (movieRating > highestRating) {
            highestRating = movieRating;
            highestRatedMovie = movieName;
        }

        if (movieRating < lowestRating) {
            lowestRating = movieRating
            lowestRatedMovie = movieName;
        }

        sumRatings += movieRating;
    }

    let averageRating = sumRatings / movieNumber;

    console.log(`${highestRatedMovie} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestRatedMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
    
    
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}

movieRating(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"])
    