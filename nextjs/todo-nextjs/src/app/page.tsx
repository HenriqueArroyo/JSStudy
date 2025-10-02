"use client"; // Necessário no Next.js 13+ (App Router) quando usamos hooks do React (useState, useEffect, etc.)

import { useState } from "react"; 
// Importa o hook useState, que permite gerenciar estado dentro do componente

// Definimos uma interface para tipar nossas tarefas
interface Task {
  id: number;         // identificador único
  descricao: string;  // descrição da tarefa
  concluida: boolean; // status: feita ou não
}

// Componente principal da página (Next.js sempre exporta um default)
export default function Home() {
  // Estado que guarda a lista de tarefas
  const [tasks, setTasks] = useState<Task[]>([]);
  // Estado que guarda o valor digitado no input
  const [novaTask, setNovaTask] = useState("");

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (!novaTask.trim()) return; // evita adicionar tarefas vazias
    const nova: Task = {
      id: Date.now(),       // gera um id único baseado no timestamp
      descricao: novaTask,  // pega a descrição do input
      concluida: false,     // toda nova tarefa começa não concluída
    };
    setTasks([...tasks, nova]); // adiciona a nova tarefa à lista (spread operator)
    setNovaTask("");            // limpa o input
  };

  // Função para alternar o status de concluída/não concluída
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map(t =>
        t.id === id ? { ...t, concluida: !t.concluida } : t // se o id bater, inverte o status
      )
    );
  };

  // Função para remover uma tarefa pelo id
  const removeTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id)); // mantém apenas as tarefas com id diferente
  };

  // JSX: a interface da aplicação
  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📌 Lista de Tarefas</h1>

      {/* Campo de input controlado (valor vem do estado) */}
      <input
        type="text"
        value={novaTask}
        onChange={(e) => setNovaTask(e.target.value)} // atualiza o estado a cada digitação
        placeholder="Digite uma tarefa"
      />
      {/* Botão que adiciona tarefa */}
      <button onClick={addTask}>Adicionar</button>

      {/* Lista todas as tarefas */}
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {/* Descrição da tarefa: riscada se concluída */}
            <span
              style={{
                textDecoration: t.concluida ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {t.descricao}
            </span>
            {/* Botão para concluir/desmarcar */}
            <button onClick={() => toggleTask(t.id)}>
              {t.concluida ? "Desmarcar" : "Concluir"}
            </button>
            {/* Botão para remover */}
            <button onClick={() => removeTask(t.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
