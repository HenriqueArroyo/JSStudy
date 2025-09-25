import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
  } from "./userRepository";
  
  async function main() {
    console.log("=== CRUD MySQL com TypeScript puro ===");
  
    // CREATE
    const novo = await createUser({ name: "Henrique", email: "henrique@email.com" });
    console.log("Usuário criado:", novo);
  
    // READ ALL
    const todos = await getAllUsers();
    console.log("Todos os usuários:", todos);
  
    // READ ONE
    const um = await getUserById(novo.id!);
    console.log("Usuário encontrado:", um);
  
    // UPDATE
    const atualizado = await updateUser(novo.id!, { name: "Henrique Atualizado", email: "henriq@novo.com" });
    console.log("Usuário atualizado?", atualizado);
  
    // DELETE
    const deletado = await deleteUser(novo.id!);
    console.log("Usuário deletado?", deletado);
  }
  
  main().catch(console.error);
  