export interface TaskInterface {
  id: number; // create task timestamp
  description: string;
  checked: boolean;
  date: string; // ISO Date string (same as timestamp)
}

export interface TaskProps {
  setTask: (task: TaskInterface) => void;
}

export interface ListProps {
  tasks: TaskInterface[];
  updateTask: (taskUpdated: TaskInterface) => void
  deleteTask: (tasktoDelete: TaskInterface) => void
}
