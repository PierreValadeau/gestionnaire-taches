import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
}

const TaskBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);  // Liste des tâches

  // Fonction pour ajouter une tâche
  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  // Fonction pour gérer le formulaire et ajouter une nouvelle tâche
  const handleAddTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      title: "Nouvelle tâche",
      description: "Description de la nouvelle tâche",
    };
    addTask(newTask);  // Appeler addTask pour ajouter une tâche
  };

  return (
    <div>
      <button onClick={handleAddTask}>Ajouter une tâche</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskBoard;

