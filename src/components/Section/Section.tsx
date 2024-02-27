import { useDrop } from 'react-dnd';
import { useEffect, useState } from 'react';
import Task from '../Task/Task';
import { TaskInterface } from '../Task/Task.interface';
import { SectionProps } from './Section.interface';
import addItemToSection from '../../utils/additemToSection';
import CreateTask from '../CreateTask/CreateTask';
import styles from './Section.module.scss';

const Section = ({
  status,
  tasks,
  setTasks,
  todos,
  inProgress,
  closed,
}: SectionProps): JSX.Element => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    'To be completed': 0,
    'In progress': 0,
    Closed: 0,
  });
  const currentTasks = ((): TaskInterface[] => {
    switch (status) {
      case 'To be completed':
        return todos;
      case 'In progress':
        return inProgress;
      case 'Closed':
        return closed;
      default:
        return [];
    }
  })();

  const [, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item: { id: string }): void => {
      addItemToSection(item.id, status, setTasks);

      setCounts((prevCounts) => ({
        ...prevCounts,
        [status]: prevCounts[status] + 1,
      }));
    },
    collect: (monitor): { isOver: boolean } => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  useEffect(() => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [status]: currentTasks.length,
    }));
  }, [status, currentTasks.length]);

  return (
    <div className={styles.container} ref={drop}>
      <header>
        <h3>{status}</h3>
        <p className={styles.counter}>{counts[status]}</p>
      </header>
      <ul>
        {currentTasks.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
      </ul>
      {status === 'To be completed' && <CreateTask setTasks={setTasks} />}
    </div>
  );
};

export default Section;
