"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
let produtos = [];
let nextId = 1;
function addProduto(nome, preco, quantidade) {
    const novo = {
        id: nextId++,
        nome,
        preco,
        quantidade
    };
    produtos.push(novo);
    return novo;
}
function listProdutos() {
    return produtos;
}
function updateProduto(id, dados) {
    const produto = produtos.find((p) => p.id === id);
    if (!produto)
        return null;
    Object.assign(produto, dados);
    return produto;
}
function removeProduto(id) {
    const tamanhoInicial = produtos.length;
    produtos = produtos.filter((p) => p.id !== id);
    return produtos.length < tamanhoInicial;
}
function calcularTotal() {
    // let total = 0;
    // for (const p of produtos) {
    // total += p.preco
    // }
    // return total
    const total = produtos.reduce((acc, p) => acc + p.preco, 0);
    return total;
}
console.log("=== Sistema de Estoque ===");
const p1 = addProduto("Coca Cola", 5, 30);
const p2 = addProduto("Fanta", 4, 50);
const p3 = addProduto("Sprite", 7, 15);
const p4 = addProduto("Pepsi", 6, 20);
console.log(listProdutos());
updateProduto(p1.id, { preco: 8 });
removeProduto(p2.id);
console.log("Lista Final: ", listProdutos());
console.log("Preço total: ", calcularTotal());
//# sourceMappingURL=estoque.js.map