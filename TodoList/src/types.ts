export interface Task {
  id: number;
  text: string;
  status: 'todo' | 'inProgress' | 'done';
}
