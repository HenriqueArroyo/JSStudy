interface Contato {
    id: number,
    nome: string,
    email: string,
    telefone: string
};

let contatos: Contato[] = [];
let nextId: number = 1;

function addContato(nome: string, email: string, telefone: string): Contato {
    const novo: Contato = {
        id: nextId++,
        nome,
        email,
        telefone
    }
    contatos.push(novo);
    return novo;
}

function listContatos(): Contato[] {
    return contatos;
};

function updateContato(id: number, dados: Partial<Contato>): Contato | null {
    const contato = contatos.find((c) => c.id === id);
    if (!contato) return null;
    Object.assign(contato, dados);

    return contato;
}

function removeContato(id:number): boolean {
    const tamanhoInicial = contatos.length;
    contatos = contatos.filter((c) => c.id !== id);
    
    return contatos.length < tamanhoInicial;
}

console.log("Gerenciador de contatos")
const c1 = addContato("Henrique", "henrique@email.com", "119999");
const c2 = addContato("Mauro", "mauro@email.com", "129999");

console.log("Lista Inicial: ", listContatos());

updateContato(c1. id, {telefone: "1399999"});
console.log("Lista atualizada: ", listContatos());

removeContato(c2.id);
console.log("Lista final: ", listContatos());

