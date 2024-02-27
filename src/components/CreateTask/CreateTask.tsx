import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskProps } from './CreateTask.interface';
import { TaskInterface } from '../Task/Task.interface';

const CreateTask = ({ setTasks }: CreateTaskProps): JSX.Element => {
  const [task, setTask] = useState<TaskInterface>({
    id: '',
    name: '',
    status: 'To be completed',
  });

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (task.name.trim() !== '') {
      setTasks((prev) => [...prev, { ...task, id: uuidv4() }]);
      setTask({ id: '', name: '', status: 'todo' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setTask({ ...task, id: uuidv4(), name: e.target.value })
        }
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateTask;
