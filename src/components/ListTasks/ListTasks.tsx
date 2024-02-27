import { useEffect, useState, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import styles from './ListTasks.module.scss';
import { ListTasksProps } from './ListTasks.interface';
import { TaskInterface } from '../Task/Task.interface';
import addItemToSection from '../../utils/additemToSection';
import Section from '../Section/Section';

const ListTasks = ({ tasks, setTasks }: ListTasksProps): JSX.Element => {
  const [todos, setTodos] = useState<TaskInterface[]>([]);
  const [inProgress, setInProgress] = useState<TaskInterface[]>([]);
  const [closed, setClosed] = useState<TaskInterface[]>([]);

  useEffect(() => {
    const filterTodos = tasks.filter((task) => task.status === 'To be completed');
    const filterInProgress = tasks.filter((task) => task.status === 'In progress');
    const filterClosed = tasks.filter((task) => task.status === 'Closed');

    setTodos(filterTodos);
    setInProgress(filterInProgress);
    setClosed(filterClosed);
  }, [tasks]);

  useDrop(() => ({
    accept: 'task',
    drop: (item: { id: string; status: string }) =>
      addItemToSection(item.id, item.status, setTasks),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const sectionRef = useRef(null);

  const statuses = ['To be completed', 'In progress', 'Closed'];

  return (
    <div className={styles.container} ref={sectionRef}>
      {statuses.map((status) => (
        <Section
          key={uuidv4()}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          inProgress={inProgress}
          closed={closed}
        />
      ))}
    </div>
  );
};

export default ListTasks;
