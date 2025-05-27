function building (floors, rooms) {

    for (let currentFloor = floors; currentFloor >=1 ; currentFloor--) {
        let roomsName = ``;
        for (let currentRoom = 0; currentRoom < rooms; currentRoom++) {
            if (currentFloor === floors) {
                roomsName += `L${currentFloor}${currentRoom} `;
            } else if (currentFloor % 2 === 0) {
                roomsName += `O${currentFloor}${currentRoom} `;
            } else {
                roomsName += `A${currentFloor}${currentRoom} `;
                
            }
        
        }
        console.log(roomsName);
        
    }
}

building(6, 4)