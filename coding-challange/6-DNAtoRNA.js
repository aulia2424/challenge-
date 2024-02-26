// day 7
// if else
// function DNAtoRNA(dna) {
//     let rna = '';
//     for (let i = 0; i < dna.length; i++) {
//         if (dna[i] === 'T') {
//             rna += 'U';
//         } else {
//             rna += dna[i];
//         }
//     }
//     return rna;
// }
 
// console.log(DNAtoRNA('GCAT'))

// with ternary
// function DNAtoRNA(dna) {
//     let rna = '';
//     for (let i = 0; i < dna.length; i++) {
//         rna += dna[i] === 'T' ? 'U' : dna[i]
//     }
//     return rna;
// }
     
// console.log(DNAtoRNA('GCAT'))

// with map
// const DNAtoRNA = (dna) => dna.split('').map((el) => (el === 'T' ? 'U' : el)).join(' ')
    
// console.log(DNAtoRNA('GCAT'))

// with replace REGULAR EXPLARATION
const DNAtoRNA = (dna) => dna.replaceAll('T', 'U')
    
console.log(DNAtoRNA('GCAT'))
