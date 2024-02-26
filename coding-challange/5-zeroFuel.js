// day 5
// dibagi
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//    return distanceToPump / mpg <= fuelLeft;  
// };
// console.log(zeroFuel(50, 25, 2))

// dikali
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//    return fuelLeft * mpg >= distanceToPump;  
// };
// console.log(zeroFuel(50, 25, 2))

// oneliner
const zeroFuel = (distanceToPump, mpg, fuelLeft) => fuelLeft * mpg >= distanceToPump;

console.log(zeroFuel(100, 50, 1))