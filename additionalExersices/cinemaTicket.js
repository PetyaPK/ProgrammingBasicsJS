function cinemaTicket(input) {
    let index = 0;

    let totalTicket = 0;
    let studentTicketsCount = 0;
    let standardTicketCount = 0;
    let kidsTicketCount = 0;

    let command = input[index];
    index++;

    while (command !== "Finish") {
        let movieName = command;
        let freeSeats = Number(input[index]);
        index++;
        
        let ticketCount = 0;

        let ticketType = input[index];
        index++;
        while(ticketType !== "End") {
            ticketCount++;

            switch(ticketType) {
                case "student":
                    studentTicketsCount++;
                    break;
                case "standard":
                    standardTicketCount++
                    break;
                case "kid":
                    kidsTicketCount++;
                    break
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

    let pKidsTickets = kidsTicketCount / totalTicket * 100;
    let pStandardTickets = standardTicketCount / totalTicket * 100;
    let pStudentTickets =  studentTicketsCount / totalTicket * 100;

    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${pStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${pStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${pKidsTickets.toFixed(2)}% kids tickets.`);
     
}

cinemaTicket(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
    
