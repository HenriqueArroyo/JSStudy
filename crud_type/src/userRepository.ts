import { db } from "./db";

// Tipagem para usuário
export interface User {
  id?: number;   // O "?" significa que o id é opcional (só existe após inserir no banco)
  name: string;  // Nome do usuário
  email: string; // E-mail do usuário
}

// CREATE
export async function createUser(user: User): Promise<User> {
  // Executa um comando SQL para inserir um novo registro na tabela "users"
  const [result] = await db.execute(
    "INSERT INTO users (name, email) VALUES (?, ?)", // ? são placeholders para evitar SQL Injection
    [user.name, user.email] // Valores que substituem os "?" acima
  );

  // Pega o ID gerado automaticamente pelo banco (auto_increment)
  const insertId = (result as any).insertId;

  // Retorna o usuário criado, já com o ID
  return { id: insertId, ...user };
}


// READ ALL
export async function getAllUsers(): Promise<User[]> {
  // Busca todos os registros da tabela "users"
  const [rows] = await db.execute("SELECT * FROM users");

  // Converte o resultado para a tipagem User[]
  return rows as User[];
}

// READ ONE
export async function getUserById(id: number): Promise<User | null> {
  // Busca um usuário específico pelo ID
  const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);

  const data = rows as User[];

  // Se encontrar retorna o usuário, senão retorna null
  return data.length > 0 ? data[0] : null;
}


// UPDATE
export async function updateUser(id: number, user: User): Promise<boolean> {
  // Atualiza os campos name e email de um usuário pelo ID
  const [result] = await db.execute(
    "UPDATE users SET name=?, email=? WHERE id=?",
    [user.name, user.email, id]
  );

  // Retorna true se algum registro foi alterado, senão false
  return (result as any).affectedRows > 0;
}

// DELETE
export async function deleteUser(id: number): Promise<boolean> {
  // Exclui um usuário pelo ID
  const [result] = await db.execute("DELETE FROM users WHERE id=?", [id]);

  // Retorna true se algum registro foi removido
  return (result as any).affectedRows > 0;
}

