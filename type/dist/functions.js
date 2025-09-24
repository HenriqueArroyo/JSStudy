"use strict";
// ---------- Interface para função ----------
Object.defineProperty(exports, "__esModule", { value: true });
;
// ---------- Uso da interface ----------
// A função "sum" (somar) é do tipo MathFunc, ou seja,
// precisa seguir o contrato: receber dois numbers e retornar um number.
const sum = (x, y) => {
    return x + y;
};
// ---------- Execução ----------
// Chamamos a função "sum" com 2 e 3.
// O retorno é um number (no caso, 5).
const value = sum(2, 3);
// ---------- Função com retorno void ----------
// A função "log" recebe uma string e não retorna nada.
// O tipo "void" indica ausência de retorno.
const log = (message) => {
    console.log(message);
};
// ---------- Outra função do tipo MathFunc ----------
// "sub" é uma função de subtração que também segue o contrato da interface MathFunc.
const sub = (x, y) => {
    return x - y;
};
//# sourceMappingURL=functions.js.map