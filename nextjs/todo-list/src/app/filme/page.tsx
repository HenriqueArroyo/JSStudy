"use client"; 


import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Filme.module.css"


export default function Home() {
 interface Filme {
    id: string,
    titulo: string,
    nota: number,
    imagem: string
 }

const [filmes, setFilmes] = useState<Filme[]>([]);

const [novoTitulo, setTitulo] = useState("");
const [novaNota, setNota] = useState<number | "">("");
const [novaImagem, setImage] = useState("");

const addFilme = () => {
    if (!novaImagem.trim() || !novoTitulo.trim()) return false;

    const novoFilme: Filme = {
        id: crypto.randomUUID(),
        titulo: novoTitulo,
        nota: Number(novaNota),
        imagem: novaImagem
    }

    setFilmes([...filmes, novoFilme]);
    setTitulo("");
    setNota("");
    setImage("");
}

const removeFilme = (id: string) => {
    setFilmes(filmes.filter((filme)=> filme.id !== id));
};


  return (
    <main className={styles.menu}>
          <h1 className="text-3xl font-bold mb-4">Lista de Filmes</h1>

<div className="flex gap-2 mb-4">
  <input
    className="border p-2 rounded w-64"
    value={novoTitulo}
    onChange={(e) => setTitulo(e.target.value)}
    // Atualiza o estado "newTask" conforme o usuário digita.
    placeholder="Digite o titulo do filme"
    // Texto de dica dentro do campo.
  />
    <input type="number" max={10} min={0}
    className="border p-2 rounded"
    value={novaNota}
    onChange={(e) => setNota(e.target.value === "" ? "" : Number(e.target.value))}
    // Atualiza o estado "newTask" conforme o usuário digita.
    placeholder="Digite uma nota"
    // Texto de dica dentro do campo.
  />
    <input
    className="border p-2 rounded w-64"
    value={novaImagem}
    onChange={(e) => setImage(e.target.value)}
    // Atualiza o estado "newTask" conforme o usuário digita.
    placeholder="Digite o URL da imagem"
    // Texto de dica dentro do campo.
  />

  {novaImagem && (
   <img
   src={novaImagem}
   alt="Prévia do filme"
   className="rounded shadow w-[150px] h-[200px] object-cover"
 />
  )}

  <button className={styles.adicionar} onClick={addFilme}
  // Ao clicar, executa a função addTask() para adicionar a nova tarefa.
  >
    Adicionar 
  </button>
</div>

<ul className="w-64">
  {filmes.map((filme) => (
    <li
    key={filme.id}
    className="bg-gray-100 p-4 rounded shadow flex flex-col items-center"
  >
      <img
      src={filme.imagem}
      alt="Prévia do filme"
      className="rounded shadow w-[150px] h-[200px] object-cover"
    />
    <h2 className="font-semibold">{filme.titulo}</h2>
    <p className="text-sm text-gray-600 mb-2">⭐ {filme.nota}/10</p>

    <button
      className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600 transition"
      onClick={() => removeFilme(filme.id)}
    >
      Remover
    </button>
  </li>
  ))}
</ul>

      
   


    </main>
  );
}
