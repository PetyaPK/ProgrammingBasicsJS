function cinemaTicket(input) {
    let index = 0;

    let command = input[index];
    index++;

    let totalTicket = 0;
    let studentTicketCount = 0;
    let standardTicketCount = 0;
    let kidTicketCount = 0;


    while (command !== "Finish") {
        let movieName = command;
        let freeSeats = Number(input[index]);
        index++;

        let ticketType = input[index];
        index++;

        let ticketCount = 0;
        while (ticketType !== "End") {
            ticketCount++;

            switch(ticketType) {
                case "student":
                    studentTicketCount++;
                    break;
                case "standard":
                    standardTicketCount++;
                    break;
                case "kid":
                    kidTicketCount++;
                    break;
            }
            
            if (ticketCount === freeSeats) {
                break;
            }

            ticketType = input[index];
            index++;
        }

        totalTicket += ticketCount;

        let avgForMovie = ticketCount / freeSeats * 100;
        console.log(`${movieName} - ${avgForMovie.toFixed(2)}% full.`);

        command = input[index];
        index++;
        
    }

    let pStudent = studentTicketCount / totalTicket * 100;
    let pStandard = standardTicketCount / totalTicket * 100;
    let pKids = kidTicketCount / totalTicket * 100;

    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${pStudent.toFixed(2)}% student tickets.`);
    console.log(`${pStandard.toFixed(2)}% standard tickets.`);
    console.log(`${pKids.toFixed(2)}% kids tickets.`);
  
}

cinemaTicket((["The Matrix",

    "20",
    
    "student",
    
    "standard",
    
    "kid",
    
    "kid",
    
    "student",
    
    "student",
    
    "standard",
    
    "student",
    
    "End",
    
    "The Green Mile",
    
    "17",
    
    "student",
    
    "standard",
    
    "standard",
    
    "student",
    
    "standard",
    
    "student",
    
    "End",
    
    "Amadeus",
    
    "3",
    
    "standard",
    
    "standard",
    
    "standard",
    
    "Finish"]))