"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = require("./userRepository");
async function main() {
    console.log("=== CRUD MySQL com TypeScript puro ===");
    // CREATE
    const novo = await (0, userRepository_1.createUser)({ name: "Henrique", email: "henrique@email.com" });
    console.log("Usuário criado:", novo);
    // READ ALL
    const todos = await (0, userRepository_1.getAllUsers)();
    console.log("Todos os usuários:", todos);
    // READ ONE
    const um = await (0, userRepository_1.getUserById)(novo.id);
    console.log("Usuário encontrado:", um);
    // UPDATE
    const atualizado = await (0, userRepository_1.updateUser)(novo.id, { name: "Henrique Atualizado", email: "henriq@novo.com" });
    console.log("Usuário atualizado?", atualizado);
    // DELETE
    const deletado = await (0, userRepository_1.deleteUser)(novo.id);
    console.log("Usuário deletado?", deletado);
}
main().catch(console.error);
