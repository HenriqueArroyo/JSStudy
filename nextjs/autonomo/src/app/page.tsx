"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./styles/Page.module.css";

interface Anotacao {
  id: string,
  titulo: string,
  texto: string
}

export default function Home() {
const [anotacoes, setAnotacao] = useState<Anotacao[]>([]);
const [novoTitulo, setTitulo] = useState("");
const [novoTexto, setTexto] = useState("");

const addAnotacao = () => {
  if (!novoTitulo.trim()|| !novoTexto) return false;

  const novaAnotacao:Anotacao = {
    id: crypto.randomUUID(),
    titulo: novoTitulo,
    texto: novoTexto
  }

  setAnotacao([...anotacoes, novaAnotacao]);
  setTitulo("");
  setTexto("");
}

const removeAnotacao = (id: string) => {
  setAnotacao(anotacoes.filter((a) => a.id !== id));
}

  return (
   <main>
    <div className="formulario">
      <label htmlFor="">Titulo</label>
      <input type="text" value={novoTitulo} onChange={(e) => setTitulo(e.target.value)} />
      <label htmlFor="">Texto</label>
      <input type="text" value={novoTexto} onChange={(e) => setTexto(e.target.value)} />
      <button onClick={addAnotacao}>Adicionar</button>
    </div>
    <div className="anotacoes">
    <ul className="w-64">
      {anotacoes.map((anotacao) => (
        <li key={anotacao.id}>
          <span>
            {anotacao.titulo}/
          </span>
          <span>
            {anotacao.texto}/
          </span>
          <button onClick={() => removeAnotacao(anotacao.id)}>
            X
          </button>

        </li>
      ))}
    </ul>
    </div>
   </main>
  );
}
