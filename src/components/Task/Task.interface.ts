export interface TaskInterface {
  id: string;
  name: string;
  status: string;
}

export interface MyTaskProps {
  task: TaskInterface;
  tasks: TaskInterface[];
  setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>;
}
