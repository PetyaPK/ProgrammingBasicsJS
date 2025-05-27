function gameTickets(budget, category, peopleNum) {
    let transport = 0;

    if (peopleNum >= 1 && peopleNum <= 4) {
        transport = 0.75 * budget;
    } else if (peopleNum > 4 && peopleNum <= 9) {
        transport = 0.60 * budget;
    } else if (peopleNum > 9 && peopleNum <= 24) {
        transport = 0.50 * budget;
    } else if (peopleNum > 24 && peopleNum <= 49) {
        transport = 0.40 * budget;
    } else if (peopleNum > 49) {
        transport = 0.25 * budget;
    }

    let ticketsBudget = budget - transport;
    let diff = 0;
    let ticketsAllPrice = 0;

    switch (category) {
        case "VIP":
            ticketsAllPrice = peopleNum * 499.99;
            diff = ticketsBudget - ticketsAllPrice;
            break;
        case "Normal":
            ticketsAllPrice = peopleNum * 249.99;
            diff = ticketsBudget - ticketsAllPrice;
            break;
    }

    if (diff >= 0) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else if (diff < 0) {
        diff1 = ticketsAllPrice - ticketsBudget
        console.log(`Not enough money! You need ${diff1.toFixed(2)} leva.`);
    }
}

gameTickets(50000,
    "Normal",
    200

)