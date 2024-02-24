// day 2
// CARA PERTAMA
// const reverseSeq = n => {
//     const result = [];
//     for (let i = n; i >= 1; i-- ) {
//         result.push(i);
//     }
//     return result;
//   };

// console.log(reverseSeq(5))

// CARA KEDUA
const reverseSeq = n => [...Array(n)].fill().map((el, i) => n - i);

console.log(reverseSeq(5))