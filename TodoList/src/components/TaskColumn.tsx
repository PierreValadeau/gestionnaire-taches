import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types';

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  updateTaskStatus: (taskId: number, newStatus: string) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, updateTaskStatus }) => {
  return (
    <div className="task-column">
      <h2>{title}</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTaskStatus={updateTaskStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskColumn;
