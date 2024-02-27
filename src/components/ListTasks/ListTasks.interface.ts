import { TaskInterface } from '../Task/Task.interface';

export interface ListTasksProps {
  tasks: TaskInterface[];
  setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>;
}
