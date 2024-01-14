import React from 'react';
import { FC } from 'react';
import { useState, FormEvent } from 'react';
import './App.css';
import Input from './components/Input/Input';
import AppHeader from './components/AppHeader/AppHeader';
import { TaskModelInterface } from './Model/taskModel';
import TodoList from './components/TodoList/TodoList';

const App : FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<TaskModelInterface[]>([]);

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id : Date.now(), title : task, isCompleted : false}]);
      setTask("")
    }

  };

  return (
    <div className="App">
      <AppHeader/>
      <Input task={task} setTask={setTask} handleAddTask={handleAddTask}/>
      <TodoList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
} 

export default App;
