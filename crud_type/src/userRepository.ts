import {db} from "./db";

// Tipagem para usuario
export interface User {
    id?: number;
    name: string;
    email: string;
}

//CREATE

export async function createUser(user: User): Promise<User> {
    const [result] = await db.execute(
        "INSERT INTO users (name, email) values (?, ?)",
        [user.name, user.email]
    );
    const insertId = (result as any).insertId;
    return {id: insertId, ...user}
}