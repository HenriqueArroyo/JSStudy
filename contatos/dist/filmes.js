"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let filmes = [];
let nextId = 1;
function addFilme(titulo, genero, assistido) {
    const novo = {
        id: nextId++,
        titulo,
        genero,
        assistido
    };
    filmes.push(novo);
    return novo;
}
function listFilmes() {
    return filmes;
}
function updateFilme(id, dados) {
    let filme = filmes.find((f) => f.id === id);
    if (!filme)
        return null;
    Object.assign(filme, dados);
    return filme;
}
function removeFilme(id) {
    const tamanhoInicial = filmes.length;
    filmes = filmes.filter((f) => f.id !== id);
    return filmes.length < tamanhoInicial;
}
console.log("Gerenciamento de Filmes: ");
const f1 = addFilme("Poderoso Chefão", "Máfia", true);
//# sourceMappingURL=filmes.js.map