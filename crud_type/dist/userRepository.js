"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
const db_1 = require("./db");
// CREATE
async function createUser(user) {
    const [result] = await db_1.db.execute("INSERT INTO users (name, email) VALUES (?, ?)", [user.name, user.email]);
    const insertId = result.insertId;
    return { id: insertId, ...user };
}
// READ ALL
async function getAllUsers() {
    const [rows] = await db_1.db.execute("SELECT * FROM users");
    return rows;
}
// READ ONE
async function getUserById(id) {
    const [rows] = await db_1.db.execute("SELECT * FROM users WHERE id = ?", [id]);
    const data = rows;
    return data.length > 0 ? data[0] : null;
}
// UPDATE
async function updateUser(id, user) {
    const [result] = await db_1.db.execute("UPDATE users SET name=?, email=? WHERE id=?", [user.name, user.email, id]);
    return result.affectedRows > 0;
}
// DELETE
async function deleteUser(id) {
    const [result] = await db_1.db.execute("DELETE FROM users WHERE id=?", [id]);
    return result.affectedRows > 0;
}
