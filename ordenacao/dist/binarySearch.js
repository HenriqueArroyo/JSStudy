"use strict";
function pesquisa_binaria(arr, target) {
    // Fim
    let right = arr.length - 1;
    // Inicio
    let left = 0;
    while (left <= right) {
        //calcula o número do meio e o math floor arredonda o número
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
}
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
console.log(pesquisa_binaria(lista, 38));
// function pesquisa_binaria_contadorTentativas(arr: number[], target: number) {
//     // Fim
//     let right = arr.length - 1;
//     // Inicio
//     let left = 0;
//     let contador = 0;
//     while (left <= right) {
//         //calcula o número do meio e o math floor arredonda o número
//         const mid = Math.floor((left + right)/ 2);
//         if (arr[mid] === target) {
//             contador ++;
//             return contador;
//         } else if (arr[mid] < target) {
//             contador ++;
//             left = mid + 1;
//         } else {
//             contador ++;
//             right = mid - 1;
//         }
//     }
//     }
