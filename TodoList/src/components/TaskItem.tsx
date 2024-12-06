import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  updateTaskStatus: (taskId: number, newStatus: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, updateTaskStatus }) => {
  const handleStatusChange = () => {
    let newStatus = '';
    if (task.status === 'todo') {
      newStatus = 'inProgress';
    } else if (task.status === 'inProgress') {
      newStatus = 'done';
    } else {
      newStatus = 'todo';
    }
    updateTaskStatus(task.id, newStatus);
  };

  return (
    <li>
      <span>{task.text}</span>
      <button onClick={handleStatusChange}>
        {task.status === 'todo'
          ? 'Start'
          : task.status === 'inProgress'
          ? 'Finish'
          : 'Restart'}
      </button>
    </li>
  );
};

export default TaskItem;
