// 1. Type Inference
let nome = "Henrique";
// nome = 20;

// 2. Arrays tipados

let numeros: number[] = [24,71,9,55,21];

function somarArray(nums: number[]): number {
    let total = 0;
    for (const n of nums) {
        total += n
    }
    return total;
}

console.log(somarArray(numeros));

// 3. Enums
enum StatusPedido {
    PENDENTE = "PENDENTE",
    APROVADO = "APROVADO",
    CANCELADO = "CANCELADO"
}

function atualizarPedido(status: StatusPedido) {
    status = StatusPedido.APROVADO
}

const st = StatusPedido.PENDENTE;


