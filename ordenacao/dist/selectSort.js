"use strict";
const buscarMenorValor = (lista) => {
    let menor = Number.MAX_VALUE;
    for (const itens of lista) {
        if (itens < menor) {
            menor = itens;
        }
    }
    return menor;
};
const ordenacaoSelecao = (lista) => {
    let novoArray = [];
    let copia = [...listTest];
    for (let i = 0; i < listTest.length; i++) {
        let menor = buscarMenorValor(copia);
        novoArray.push(menor);
        copia.splice(copia.indexOf(menor), 1);
    }
    return novoArray;
};
let listTest = [44, 21, 3, 85, 52];
console.log(ordenacaoSelecao(listTest));
