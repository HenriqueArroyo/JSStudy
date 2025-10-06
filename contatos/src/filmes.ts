interface Filme {
    id: number,
    titulo: string,
    genero: string,
    assistido: boolean
}

let filmes: Filme[] = [];
let nextId: number = 1;

function addFilme(titulo: string, genero: string, assistido: boolean): Filme {
    const novo: Filme = {
        id: nextId++,
        titulo,
        genero,
        assistido
    }
    filmes.push(novo);
    return novo
}

function listFilmes(): Filme[] {
    return filmes;
}

function updateFilme(id: number, dados: Partial<Filme>): Filme | null {
    let filme = filmes.find((f) => f.id === id);
    if (!filme) return null;
    Object.assign(filme, dados);
    return filme
}

function removeFilme(id: number): boolean {
    const tamanhoInicial = filmes.length;
    filmes = filmes.filter((f) => f.id !== id);
    return filmes.length < tamanhoInicial
}

console.log("Gerenciamento de Filmes: ")
const f1 = addFilme("Poderoso Chefão", "Máfia", true);

