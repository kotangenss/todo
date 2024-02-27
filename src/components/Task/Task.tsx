import { useDrag } from 'react-dnd';
import { MyTaskProps } from './Task.interface';
import styles from './Task.module.scss';

const Task = ({ task, tasks, setTasks }: MyTaskProps): JSX.Element => {
  const [, drag] = useDrag(() => ({
    type: 'task',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleRemove = (id: string): void => {
    const filterTasks = tasks.filter((el) => el.id !== id);
    setTasks(filterTasks);
  };

  return (
    <div ref={drag} className={styles.container}>
      <p>{task.name}</p>
      <button type="button" onClick={(): void => handleRemove(task.id)}>
        -
      </button>
    </div>
  );
};

export default Task;
