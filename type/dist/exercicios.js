"use strict";
// // // 1. tipagem de funções e objetos
Object.defineProperty(exports, "__esModule", { value: true });
// // const somaNumeros = (...numeros: number[]): number => {
// //     let total = 0;
// //     for (const nums of numeros) {
// //         total += nums
// //     }
// //     return total
// // }
// // console.log(somaNumeros(12,15,30,25,10))
// // // 2. Interfaces e Type Aliases
// // interface usuario {
// //     id: number;
// //     nome: string;
// //     email: string;
// // }
// // const boasVindas = (usuario: usuario): string => {
// //     return `Boas vindas, ${usuario.nome}`
// // }
// // const userTeste: usuario = {
// //     id: 1,
// //     nome: "Henrique",
// //     email: "info@engebag.com.br"
// // }
// // console.log(boasVindas(userTeste));
// // // 3. Generics
// // const generic = (arr: any[]): any => {
// //     return arr[0]
// // }
// const pessoas = ["Henrique", "Claudio", "Bravo"];
// // const numberos = [10,20,30];
// // console.log(generic(pessoas))
// // segunda lista
// //1 Tipos primitivos
// const formatarPreco = (valor: number): string => {
//     let formatado: string = valor.toString();
//     return `R$ ${formatado},00`
// }
// console.log(formatarPreco(20))
// //2 Union Types
// const imprimirID = (arg: number | string):void => {
//     console.log(arg);
// }
// imprimirID(20);
// imprimirID("toma");
// // 3 Optional Parameters
// const saudar = (nome:string, idade?:number): void => {
//     if (idade) {
//         console.log(`Olá ${nome}, você tem ${idade} anos.`)
//     } else {
//         console.log(`Olá ${nome}.`)
//     }
// }
// saudar("Henrique");
// // 4. Interface
// interface Produto {
//     id: number,
//     nome: string,
//     preco: number
// }
// const calcularTotal = (produtos: Produto[]): number => {
//     let total: number = 0;
//     for (const p of produtos) {
//         total += p.preco
//     }
//     return total
// }
// let listaProdutos: Array<Produto> = [
//     {id: 1, nome: "Coca Cola", preco: 6},
//     {id: 2, nome: "Pepsi", preco: 6},
//     {id: 3, nome: "Fanta Laranja", preco: 6},
//     {id: 4, nome: "Guaraná Antartica", preco: 6},
// ]
// console.log(calcularTotal(listaProdutos));
// //5. Classe
// class Carro {
//     private marca: string;
//     private ano: number;
//     constructor(marca:string, ano:number) {
//         this.marca = marca;
//         this.ano = ano;
//     }
//     getDescricao() {
//         return `Carro: ${this.marca} - ${this.ano}`;
//     }
// }
// const car1 = new Carro("Fiat", 2010);
// console.log(car1.getDescricao());
// //6. Generics
// const invertArray = (arr: any[]): void => {
//     console.log(arr.reverse());
// }
// const nums: number[] = [1,2,3]
// invertArray(nums);
// invertArray(pessoas);
// // 7. Mapped Types
// type User = {
//     id: number;
//     nome: string;
//     email: string;
// }
// type PartialUser = Partial<User>;
// type UserSomenteLeitura = Readonly<User>;
// // 8. Type Narrowing (Type Guards)
// const mostrarTipo = (arg: string | number| boolean) => {
//     if (typeof arg === "string") {
//         console.log("É String");
//     } else if (typeof arg === "number") {
//         console.log("É number ");
//     } else {
//         console.log("É boolean")
//     }
// }
// mostrarTipo(true);
// // 9. Promisese / Async
// const buscarUsuario = (id:number): Promise<{id: number; nome: string}> => {
//     return new Promise((resolve)=> {
//         setTimeout(() => {
//             resolve({id, nome: "Henrique"});
//         }, 1000); //1 Segundo
//     });
// };
// const executar = async () => {
//     console.log("Buscando usuário...");
//     const usuario = await buscarUsuario(1);
//     console.log("Usuario encontrado: ",usuario);
// };
// executar();
// // 10. Crud Simples
// type Task = {
//     id: number;
//     descricao: string;
//     concluida: boolean;
// }
// let task: Task[] = [];
// let nextId = 1;
// const addTask = (descricao: string): void => {
//     const novaTask: Task = {id: nextId++, descricao, concluida: false};
//     task.push(novaTask);
//     console.log(`Tarefa adicionada: ${descricao}`);
// };
// const listTasks = (): void => {
//     console.log("\nLista de tarefas: ");
//     task.forEach((task) => {
//         console.log(`[${task.concluida ? "X" : " "}] ${task.id} - ${task.descricao}`);
//     });
// };
// const toggleTask = (id: number): void => {
//     const tas = task.find((t) => t.id === id);
//     if (tas) {
//         tas.concluida = !tas.concluida;
//         console.log(`Tarefa ${id} marcada como ${tas.concluida ? "Concluída" : "Pendente"}`);
//     } else {
//         console.log("Tarefa não encontrada!");
//     }
// }
// const removeTask = (id: number): void => {
//     task = task.filter((t) => t.id !== id);
//     console.log(`Tarefa ${id} removida.`);
// };
// addTask("Estudar Typescript");
// addTask("Fazer exercícios de async/await");
// listTasks();
// toggleTask(1);
// listTasks();
// removeTask(2);
// listTasks();
// 1. Tipos Primitivos
const converterParaMaiusculas = (texto) => {
    let formatado = texto.toUpperCase();
    return formatado;
};
console.log(converterParaMaiusculas("Henrique"));
// 2. Union Types
const normalizarEntrada = (valor) => {
    const formatado = valor.toString().trim();
    return formatado;
};
console.log(normalizarEntrada(" 123 "));
//# sourceMappingURL=exercicios.js.map