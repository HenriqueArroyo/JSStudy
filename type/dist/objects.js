"use strict";
// ---------- Types (tipos personalizados) ----------
Object.defineProperty(exports, "__esModule", { value: true });
// Criação de um objeto do tipo "User"
const user = {
    firstName: "Henrique",
    age: 19,
    email: "henrique@gmail.com",
    orders: [{ productId: '1', price: 200 }], // pedido inicial
    register() {
        return 'a'; // implementação do método "register"
    },
};
// Função que recebe uma mensagem do tipo string
const printLog = (message) => { };
// Aqui o operador "!" indica que a propriedade não será null/undefined
printLog(user.password);
// Criação de um objeto que une "Author" e "User"
// ou seja, precisa ter as propriedades de ambos
const author = {
    age: 2,
    books: ['1'], // herdado de Author
    email: 'author@gmail.com',
    firstName: 'Felipe',
    orders: [{ productId: '2', price: 100 }],
    register() {
        return "b";
    },
};
// Objeto que implementa a interface "UserInterface"
const emailUser = {
    email: "felipe@gmail.com",
    firstName: "Felipe",
    login() {
        return "a";
    },
};
// Objeto que implementa as duas interfaces ao mesmo tempo
const newAuthor = {
    email: "author@gmail.com",
    firstName: "Felipe",
    books: [],
    login() {
        return "a";
    },
};
// Exemplo de uso
const grade = 1; // poderia ser "1" (string) também
//# sourceMappingURL=objects.js.map