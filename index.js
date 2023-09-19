// Code your solution in this file!

//distanceFromHqInBlocks

function distanceFromHqInBlocks(pickUpLocation){
    const hqLocation = 42;
    const distance = (pickUpLocation - hqLocation);
    return distance;
}


// distanceFromHqInFeet

function distanceFromHqInFeet(pickUpLocation){
    const hqLocation = 42;
    const feetPerBlock = 264;
    const distanceInFeet = (pickUpLocation - hqLocation) * feetPerBlock;
    return distanceInFeet;
}


//distanceTravelledInFeet

function distanceTravelledInFeet(startBlock, endBlock){
    const feetPerBlock = 264;
    const distanceInFeet = (endBlock - startBlock) * feetPerBlock;
    return distanceInFeet;
}

function calculatesFarePrice(startBlock, destinationBlock){
    const feetPerBlock = 264
    const distanceInFeet = (destinationBlock - startBlock) * feetPerBlock;
    if(distanceInFeet <= 400){
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02 / 100
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 0 === 'cannot travel that far';
    }
}