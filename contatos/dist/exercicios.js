"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Type Inference
let nome = "Henrique";
// nome = 20;
// 2. Arrays tipados
let numeros = [24, 71, 9, 55, 21];
function somarArray(nums) {
    let total = 0;
    for (const n of nums) {
        total += n;
    }
    return total;
}
console.log(somarArray(numeros));
// 3. Enums
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["PENDENTE"] = "PENDENTE";
    StatusPedido["APROVADO"] = "APROVADO";
    StatusPedido["CANCELADO"] = "CANCELADO";
})(StatusPedido || (StatusPedido = {}));
function atualizarPedido(status) {
    status = StatusPedido.APROVADO;
}
const st = StatusPedido.PENDENTE;
//# sourceMappingURL=exercicios.js.map