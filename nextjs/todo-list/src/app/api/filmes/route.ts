import { NextResponse } from "next/server";
import { db } from "@/lib/db";

//Listar filmes
export async function GET() {
    const [rows] = await db.query("SELECT * FROM filmes");
    return NextResponse.json(rows);
}

// Adicionar filme
export async function POST(req: Request) {
    const {id, titulo, nota, imagem} = await req.json();

    await db.query(
        "INSERT INTO filmes (id, titulo, nota, imagem) VALUES (?,?,?,?)",
        [id, titulo, nota, imagem]
    )

    return NextResponse.json({message: "Filme adicionado com sucesso!"});
}

//Remover FIlmes
export async function DELETE(req: Request) {
    const {id} = await req.json();
    await db.query("DELETE FROM filmes WHERE id = ?", [id]);
    return NextResponse.json({message: "Filme removido com sucesso!"});
}

//Editar Nota
export async function PUT(req: Request) {
    const {id, nota} = await req.json();
    await db.query("UPDATE filmes SET nota = ? WHERE id = ?", [nota, id]);
    return NextResponse.json({message: "Nota atualizada com sucesso!"})
}

