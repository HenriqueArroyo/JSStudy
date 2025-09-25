"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
const db_1 = require("./db");
//CREATE
async function createUser(user) {
    const [result] = await db_1.db.execute("INSERT INTO users (name, email) values (?, ?)", [user.name, user.email]);
    const insertId = result.insertId;
    return { id: insertId, ...user };
}
//# sourceMappingURL=userRepository.js.map