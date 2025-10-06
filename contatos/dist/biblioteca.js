"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let livros = [];
let nextId = 1;
function addLivro(titulo, autor) {
    const novo = {
        id: nextId++,
        titulo,
        autor,
        lido: false
    };
    livros.push(novo);
    return novo;
}
function listLivros() {
    return livros;
}
function updateLivro(id, dados) {
    const livro = livros.find((l) => l.id === id);
    if (!livro)
        return null;
    Object.assign(livro, dados);
    return livro;
}
function removeLivro(id) {
    const tamanhoInicial = livros.length;
    livros = livros.filter((l) => l.id !== id);
    return livros.length < tamanhoInicial;
}
function listarAutor(autor) {
    const lAutor = livros.filter((l) => l.autor === autor);
    return lAutor;
}
const l1 = addLivro("Memórias Póstumas de Brás Cubas", "Machado de Assis");
const l2 = addLivro("Pequeno Principe", "Frances aleatorio");
const l3 = addLivro("Quincas Borba", "Machado de Assis");
console.log("=== Lista de Livros ===");
console.log("Lista Inicial: ", listLivros());
console.log("Livros do Machado de Assis:", listarAutor("Machado de Assis"));
updateLivro(l2.id, { lido: true });
removeLivro(l3.id);
console.log("Lista final: ");
console.log(listLivros());
//# sourceMappingURL=biblioteca.js.map