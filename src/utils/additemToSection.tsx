import { TaskInterface } from '../components/Task/Task.interface';

const addItemToSection = (
  id: string,
  status: string,
  setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>
): void => {
  setTasks((prev) => {
    const updateTasks = prev.map((task) => {
      if (task.id === id) {
        return { ...task, status };
      }
      return task;
    });
    return updateTasks;
  });
};

export default addItemToSection;
