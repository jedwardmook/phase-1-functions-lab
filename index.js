// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue < 42){
    return 42 - someValue;
    }
    else{
    return someValue - 42;}
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination){
        if (destination > start){
            return (destination - start) * 264;}
        else {
            return (start - destination) * 264;}
}

function calculatesFarePrice(start, destination){
        if (distanceTravelledInFeet(start, destination) < 401){
            return 0;}
        if (distanceTravelledInFeet(start, destination) < 2000){
            return ((distanceTravelledInFeet(start, destination)-400) * .02);}
        if (distanceTravelledInFeet(start, destination) < 2500){
            return 25;}
        if (2500 < distanceTravelledInFeet(start, destination)){
            return "cannot travel that far"}

}