interface Produto {
    id: number,
    nome: string,
    preco: number,
    quantidade: number
};

let produtos:Produto[] =[];
let nextId: number = 1;

function addProduto(nome: string, preco: number, quantidade: number): Produto {
    const novo: Produto = {
        id: nextId++,
        nome,
        preco,
        quantidade
    }

    produtos.push(novo);
    return novo;
}

function listProdutos(): Produto[] {
    return produtos
}

function updateProduto(id: number, dados: Partial<Produto>): Produto | null {
    const produto = produtos.find((p) => p.id === id);
    if (!produto) return null;
    Object.assign(produto, dados);
    return produto;
}

function removeProduto(id: number): boolean {
    const tamanhoInicial = produtos.length;
    produtos = produtos.filter((p) => p.id !== id);
    return produtos.length < tamanhoInicial;
}

function calcularTotal(): number {
    // let total = 0;
    // for (const p of produtos) {
    // total += p.preco
    // }
    // return total
    const total: number = produtos.reduce((acc, p) => acc + p.preco, 0);
    return total
}

console.log("=== Sistema de Estoque ===");
const p1 = addProduto("Coca Cola", 5,30);
const p2 = addProduto("Fanta", 4, 50);
const p3 = addProduto("Sprite", 7, 15);
const p4 = addProduto("Pepsi", 6, 20);

console.log(listProdutos());

updateProduto(p1.id, {preco: 8});
removeProduto(p2.id);

console.log("Lista Final: ", listProdutos());
console.log("Preço total: ", calcularTotal());