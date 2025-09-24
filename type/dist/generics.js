"use strict";
// ---------- Função genérica ----------
Object.defineProperty(exports, "__esModule", { value: true });
// "returnValue" é uma função genérica.
// <T> significa que ela pode receber qualquer tipo (string, number, boolean...).
// O tipo T é definido no momento em que a função é chamada.
const returnValue = (value) => value;
// Aqui estamos dizendo explicitamente que T será string.
const message = returnValue("Hello World"); // retorna "Hello World"
// Aqui T é definido como number.
const count = returnValue(5); // retorna 5
// ---------- Função genérica com array ----------
// Função que recebe um array de elementos do tipo "Type"
// e retorna o primeiro valor desse array.
function getFirstValueFromArray(array) {
    return array[0];
}
// Exemplo com array de strings
const firstValueFromStringArray = getFirstValueFromArray(["1", "2"]); // "1"
// Exemplo com array de números
const firstValueFromNumberArray = getFirstValueFromArray([10, 20]); // 10
// ---------- Promises ----------
// Função assíncrona que retorna uma Promise<number>.
const returnPromise = async () => {
    return 5; // resolve a Promise com o valor 5
};
// ---------- Classes genéricas ----------
// Classe genérica que recebe um tipo T.
// Ela possui uma propriedade "zeroValue" (do tipo T)
// e um método "sum" que soma dois valores do tipo T.
class GenericNumber {
    zeroValue;
    sum;
    constructor(zeroValue, sum) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}
// Criando uma instância da classe genérica, especificando que T será number.
// zeroValue é 0, e sum é uma função que soma dois números.
const myGenericNumber = new GenericNumber(0, (x, y) => {
    return x + y;
});
//# sourceMappingURL=generics.js.map