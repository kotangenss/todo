import { TaskInterface } from '../Task/Task.interface';

export interface CreateTaskProps {
  setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>;
}
