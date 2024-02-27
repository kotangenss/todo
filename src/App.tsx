import { useState } from 'react';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import CreateTask from './components/CreateTask/CreateTask';
import ListTasks from './components/ListTasks/ListTasks';
import { TaskInterface } from './components/Task/Task.interface';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  return (
    <DndProvider backend={HTML5Backend}>
      <CreateTask setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </DndProvider>
  );
};

export default App;
