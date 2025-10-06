"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let despesas = [];
let nextId = 1;
function addDespesa(descricao, valor) {
    const novo = {
        id: nextId++,
        descricao,
        valor,
        data: Date.now()
    };
    despesas.push(novo);
    return novo;
}
function listDespesas() {
    return despesas;
}
function updateDespesa(id, dados) {
    const despesa = despesas.find((d) => d.id === id);
    if (!despesa)
        return null;
    Object.assign(despesa, dados);
    return despesa;
}
function removeDespesa(id) {
    const tamanhoInicial = despesas.length;
    despesas = despesas.filter((d) => d.id !== id);
    return despesas.length < tamanhoInicial;
}
function calcularTotal() {
    const saldoTotal = despesas.reduce((acc, d) => acc + d.valor, 0);
    return saldoTotal;
}
console.log("Mini Financeiro!!");
const d1 = addDespesa("IPTV", 30);
const d2 = addDespesa("Cartão de Crédito", 300);
console.log("Despesas Iniciais: ", listDespesas());
updateDespesa(d1.id, { valor: 25 });
removeDespesa(d2.id);
console.log("Lista Final: ", listDespesas());
console.log("Valor Total: ", calcularTotal());
//# sourceMappingURL=financeiro.js.map