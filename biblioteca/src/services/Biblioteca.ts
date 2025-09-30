import { Livro } from "../models/Livro";
import { Usuario } from "../models/Usuario";

export class Biblioteca {
    private livros: Livro[] = [];
    private usuarios: Usuario[] = [];

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    removerLivro(id: number): void {
        this.livros = this.livros.filter(l => l.id !== id);
    }

    listarLivros(): Livro[] {
        return this.livros;
    }

    filtrarPromocao(): Livro[] {
        return this.livros.filter(l => l.promocao);
    }

    calcularMediaPreco(): number{
        return this.livros.reduce((acc, l) => acc+ l.preco, 0) / this.livros.length;
    }

    adicionarUsuario(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    listarUsuarios(): Usuario[] {
        return this.usuarios;
    }

    

}