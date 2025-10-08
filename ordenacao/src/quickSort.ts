// const quickSort = (arr: number[]): number[] => {
//     if (arr.length<2) return arr;

//     let pivo: number = arr[Math.floor(arr.length/2)];
//     let menores: number[] = [];
//     let maiores: number[] = [];

//  for (let i = 0; i < arr.length; i++) {
//            if (arr[i]<pivo) {
//                menores.push(arr[i])
//            } else if(arr[i]===pivo) {continue}
//             else {
//                maiores.push(arr[i])
//            }
       
//  }

//     return [...quickSort(menores), pivo, ...quickSort(maiores)];
// }

// console.log(quickSort([10,52,2,31,32,48,29]))

const quickSort = (arr: number[]): number[] => {
    if (arr.length<2) return arr;

    let pivo: number = arr[Math.floor(arr.length/2)];
    let menores: number[] = arr.filter(x => x < pivo)
    let maiores: number[] = arr.filter(x => x > pivo)
    return [...quickSort(menores), pivo, ...quickSort(maiores)];
}

console.log(quickSort([10,52,2,31,32,48,29]))

