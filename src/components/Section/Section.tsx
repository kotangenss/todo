import { useDrop } from 'react-dnd';
import Task from '../Task/Task';
import { TaskInterface } from '../Task/Task.interface';
import { SectionProps } from './Section.interface';
import addItemToSection from '../../utils/additemToSection';

const Section = ({
  status,
  tasks,
  setTasks,
  todos,
  inProgress,
  closed,
}: SectionProps): JSX.Element => {
  const currentTasks = ((): TaskInterface[] => {
    switch (status) {
      case 'todo':
        return todos;
      case 'inprogress':
        return inProgress;
      case 'closed':
        return closed;
      default:
        return [];
    }
  })();

  const [, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item: { id: string }): void => {
      addItemToSection(item.id, status, setTasks);
    },
    collect: (monitor): { isOver: boolean } => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop}>
      <h2>{status}</h2>
      <ul>
        {currentTasks.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
      </ul>
    </div>
  );
};

export default Section;
