function oldBooks(input) {
    let index = 0;
    let bookName = input[index];
    index++;

    let bookIsFound = false;
    let bookCount = 0;

    let currentBook = input[index];



    while (currentBook !== "No More Books") {
        if (currentBook === bookName) {
            bookIsFound = true;
            break
        }

        bookCount++;

        index++;
        currentBook = input[index];
    }


    if (bookIsFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCount} books.`);
    } else {
        console.log(`You checked ${bookCount} books and found it.`);
    }
}


oldBooks(["Troy",

    "Stronger",

    "Life Style",

    "Troy"])