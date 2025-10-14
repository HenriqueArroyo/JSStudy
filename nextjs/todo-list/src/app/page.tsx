"use client"; 
// Diz ao Next.js que este componente será executado no navegador (cliente), 
// pois ele usa estados e interações (não pode ser apenas renderizado no servidor).

import { useState } from "react";
import styles from "./styles/Page.module.css"
import Image  from "next/image";
// Importa o hook useState do React, usado para criar e atualizar variáveis reativas (estados).

export default function Home() {


  // O que será mostrado na tela (HTML/JSX)
  return (
    <main className={styles.menu}>

      <h1 className="text-3xl font-bold mb-4">Seja Bem-vindo, meu caro!</h1>

      <div className="flex gap-2 mb-4">
        <p>Esta é primeira primeira experiência com NextJS, experimente!
        </p>
        <br />

      </div>


    </main>
  );
}
