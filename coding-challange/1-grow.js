// day 1
// low value FUNCTION
// function grow(x){
//     let result = x[0]
//     for(let i = 1; i < x.length; i++) {
//         result *= x[i];
//     }
//     return result;
// } 
// console.log(grow([1,2,3,4]))

// HIGH ORDER FUNCTION (REDUCE)
    const grow = (x) =>  x.reduce((acc, curr) => acc * curr)
console.log(grow([1,2,3,4]))
