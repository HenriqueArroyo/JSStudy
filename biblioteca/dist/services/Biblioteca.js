"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.livros = [];
        this.usuarios = [];
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    removerLivro(id) {
        this.livros = this.livros.filter(l => l.id !== id);
    }
    listarLivros() {
        return this.livros;
    }
    filtrarPromocao() {
        return this.livros.filter(l => l.promocao);
    }
    calcularMediaPreco() {
        return this.livros.reduce((acc, l) => acc + l.preco, 0) / this.livros.length;
    }
    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
    }
    listarUsuarios() {
        return this.usuarios;
    }
}
exports.Biblioteca = Biblioteca;
