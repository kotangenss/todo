import { TaskInterface } from '../Task/Task.interface';

export interface SectionProps {
  status: string;
  tasks: TaskInterface[];
  setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>;
  todos: TaskInterface[];
  inProgress: TaskInterface[];
  closed: TaskInterface[];
}
