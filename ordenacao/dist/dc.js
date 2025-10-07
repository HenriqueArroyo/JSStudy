"use strict";
const somaDCLinear = (arr) => {
    // Caso base
    if (arr.length === 0)
        return 0;
    if (arr.length === 1)
        return arr[0];
    // Divide: primeiro elemento e o resto do array
    const [primeiro, ...resto] = arr;
    // Conquista + Combina
    return primeiro + somaDCLinear(resto);
};
console.log(somaDCLinear([1, 2, 3, 4, 5])); // 15
// Número de itens lista
const numItens = (arr) => {
    if (arr.length === 0)
        return 0;
    const [primeiro, ...resto] = arr;
    return 1 + numItens(resto);
};
console.log(numItens([4, 5, 3, 4, 5, 6, 7, 8]));
// const somaDC = (arr: number[]): number => {
//     // 🧱 Caso base
//     if (arr.length === 0) return 0;
//     if (arr.length === 1) return arr[0];
//     // ⚔️ Dividir
//     const meio = Math.floor(arr.length / 2);
//     const esquerda = arr.slice(0, meio);
//     const direita = arr.slice(meio);
//     // 🔁 Conquistar (recursão)
//     const somaEsquerda = somaDC(esquerda);
//     const somaDireita = somaDC(direita);
//     // 🧩 Combinar (conquistar + juntar)
//     return somaEsquerda + somaDireita;
// };
// console.log(somaDC([1, 2, 3, 4, 5])); // 15
