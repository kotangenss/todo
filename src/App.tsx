import { useState } from 'react';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import ListTasks from './components/ListTasks/ListTasks';
import { TaskInterface } from './components/Task/Task.interface';
import Head from './components/Head/Head';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Head />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </DndProvider>
  );
};

export default App;
