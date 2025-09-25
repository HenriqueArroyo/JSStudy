import { db } from "./db";

// Tipagem para usuário
export interface User {
  id?: number;
  name: string;
  email: string;
}

// CREATE
export async function createUser(user: User): Promise<User> {
  const [result] = await db.execute(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [user.name, user.email]
  );
  const insertId = (result as any).insertId;
  return { id: insertId, ...user };
}

// READ ALL
export async function getAllUsers(): Promise<User[]> {
  const [rows] = await db.execute("SELECT * FROM users");
  return rows as User[];
}

// READ ONE
export async function getUserById(id: number): Promise<User | null> {
  const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
  const data = rows as User[];
  return data.length > 0 ? data[0] : null;
}

// UPDATE
export async function updateUser(id: number, user: User): Promise<boolean> {
  const [result] = await db.execute(
    "UPDATE users SET name=?, email=? WHERE id=?",
    [user.name, user.email, id]
  );
  return (result as any).affectedRows > 0;
}

// DELETE
export async function deleteUser(id: number): Promise<boolean> {
  const [result] = await db.execute("DELETE FROM users WHERE id=?", [id]);
  return (result as any).affectedRows > 0;
}
