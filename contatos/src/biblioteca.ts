interface Livro {
    id: number,
    titulo: string,
    autor: string,
    lido: boolean
}

let livros: Livro[] = [];
let nextId: number = 1;

function addLivro(titulo: string, autor: string): Livro {
    const novo: Livro = {
        id: nextId++,
        titulo,
        autor,
        lido: false
    }
    livros.push(novo);

    return novo;
}

function listLivros(): Livro[] {
    return livros;
}

function updateLivro(id: number, dados: Partial<Livro>): Livro | null {
    const livro = livros.find((l) => l.id === id);
    if (!livro) return null;
    
    Object.assign(livro, dados);
    return livro
}

function removeLivro(id: number): boolean {
    const tamanhoInicial = livros.length;
    livros = livros.filter((l) => l.id !== id);
    return livros.length < tamanhoInicial
}

function listarAutor(autor: string): Livro[] {
    const lAutor: Livro[] = livros.filter((l) => l.autor === autor);
    return lAutor
}

const l1 = addLivro("Memórias Póstumas de Brás Cubas", "Machado de Assis");
const l2 = addLivro("Pequeno Principe", "Frances aleatorio");
const l3 = addLivro("Quincas Borba", "Machado de Assis");

console.log("=== Lista de Livros ===");
console.log("Lista Inicial: ", listLivros())

console.log("Livros do Machado de Assis:", listarAutor("Machado de Assis"));

updateLivro(l2.id, {lido: true});
removeLivro(l3.id);
console.log("Lista final: ")
console.log(listLivros());