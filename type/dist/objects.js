"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    firstName: "Henrique",
    age: 19,
    email: "henrique@gmail.com",
    orders: [{ productId: '1', price: 200 }],
    register() {
        return 'a';
    },
};
const printLog = (message) => { };
printLog(user.password);
const author = {
    age: 2,
    books: ['1'],
    email: 'author@gmail.com',
    firstName: 'Felipe',
    orders: [{ productId: '2', price: 100 }],
    register() {
        return "b";
    },
};
const emailUser = {
    email: "felipe@gmail.com",
    fistName: "Felipe",
    login() {
        return "a";
    },
};
const newAuthor = {
    email: "author@gmail.com",
    fistName: "Felipe",
    books: [],
    login() {
        return "a";
    },
};
const grade = 1;
//# sourceMappingURL=objects.js.map