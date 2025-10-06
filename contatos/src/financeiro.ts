interface Despesa {
    id: number,
    descricao: string,
    valor: number,
    data: number
}

let despesas: Despesa[] = [];
let nextId: number = 1;

function addDespesa(descricao: string, valor: number): Despesa {
    const novo: Despesa = {
        id: nextId++,
        descricao,
        valor,
        data: Date.now()
    }
    despesas.push(novo)
    return novo;
}

function listDespesas(): Despesa[] {
    return despesas
}

function updateDespesa(id: number, dados: Partial<Despesa>): Despesa | null {
    const despesa = despesas.find((d)=> d.id === id);
    if (!despesa) return null;
    Object.assign(despesa, dados);
    return despesa
}

function removeDespesa(id: number): boolean {
    const tamanhoInicial = despesas.length;
    despesas = despesas.filter((d) => d.id !== id);
    return despesas.length < tamanhoInicial;
}

function calcularTotal(): number {
    const saldoTotal = despesas.reduce((acc, d) => acc+ d.valor, 0);
    return saldoTotal
}

console.log("Mini Financeiro!!")
const d1 = addDespesa("IPTV", 30);
const d2 = addDespesa("Cartão de Crédito", 300);


console.log("Despesas Iniciais: ", listDespesas());

updateDespesa(d1.id, {valor: 25});
removeDespesa(d2.id);
console.log("Lista Final: ", listDespesas());
console.log("Valor Total: ", calcularTotal());



