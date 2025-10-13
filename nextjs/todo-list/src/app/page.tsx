"use client"; 
// Diz ao Next.js que este componente será executado no navegador (cliente), 
// pois ele usa estados e interações (não pode ser apenas renderizado no servidor).

import { useState } from "react";
// Importa o hook useState do React, usado para criar e atualizar variáveis reativas (estados).

export default function Home() {
  // Define o componente principal da página (Home) e o exporta como padrão.

  // Cria um estado "tasks" que é um array de strings, e uma função "setTasks" para atualizá-lo.
  const [tasks, setTasks] = useState<string[]>([]);
  
  // Cria um estado "newTask" para guardar o texto que o usuário digita no input.
  const [newTask, setNewTask] = useState("");

  // Função que adiciona uma nova tarefa à lista.
  const addTask = () => {
    if (!newTask.trim()) return; 
    // Se o campo estiver vazio (ou só com espaços), não faz nada.

    setTasks([...tasks, newTask]); 
    // Atualiza o array de tarefas adicionando a nova no final.

    setNewTask(""); 
    // Limpa o campo de texto depois de adicionar.
  };

  // Função que remove uma tarefa com base no índice dela na lista.
  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index)); 
    // Cria um novo array com todas as tarefas, menos a que tem o índice clicado.
  };

  // O que será mostrado na tela (HTML/JSX)
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      {/* Container principal centralizado na tela com espaçamento e altura mínima total */}

      <h1 className="text-3xl font-bold mb-4">Minha To-Do List</h1>
      {/* Título do aplicativo */}

      <div className="flex gap-2 mb-4">
        {/* Linha contendo o campo de texto e o botão "Adicionar" */}

        <input
          className="border p-2 rounded w-64"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          // Atualiza o estado "newTask" conforme o usuário digita.
          placeholder="Digite uma nova tarefa"
          // Texto de dica dentro do campo.
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addTask}
          // Ao clicar, executa a função addTask() para adicionar a nova tarefa.
        >
          Adicionar
        </button>
      </div>

      <ul className="w-64">
        {/* Lista (ul) que vai mostrar todas as tarefas */}

        {tasks.map((task, index) => (
          // Percorre cada item do array "tasks" e cria um <li> para cada um.
          <li
            key={index}
            // "key" ajuda o React a identificar cada item da lista de forma única.
            className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2"
            // Define estilo visual para cada item da lista.
          >
            {task}
            {/* Mostra o texto da tarefa */}

            <button
              className="text-red-500"
              onClick={() => removeTask(index)}
              // Quando clicado, chama removeTask() com o índice daquela tarefa.
            >
              X
              {/* Botão para remover a tarefa */}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
