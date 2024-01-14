import React, { FC, FormEvent, useState, useRef, useEffect } from 'react'
import { TaskModelInterface } from '../../Model/taskModel'
import { Dispatch, SetStateAction } from 'react'
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import './Task.css'

type SingleTaskProps = {
  key : number,
  task : TaskModelInterface,
  tasks : TaskModelInterface[],
  setTasks :  Dispatch<SetStateAction<TaskModelInterface[]>>
}

const Task : FC<SingleTaskProps> = ({task, tasks, setTasks}) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.title);

  const handleIsCompletedFunc = (id : number) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, isCompleted : !task.isCompleted } : task))
  }

  const handleDeleteFunc = (id : number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const handleEditFunc = (e : FormEvent, id : number) => {
    e.preventDefault();
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title : editTask} : task)));
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  

  return (
    <form className='taks__single' onSubmit={(e) => handleEditFunc(e, task.id)}>
      {
        edit ? (
          <input ref={inputRef} className='task__single--input' value={editTask} onChange={(e) => setEditTask(e.target.value)}/>
        )
        : 
        (
          task.isCompleted ? (
            <s className='tasks__single--text'>{task.title}</s>
            ) :
            (
              <span className='tasks__single--text'>{task.title}</span>
            )
        )
      }
          <span className="icon" onClick={() => {
            if (!edit && !task.isCompleted) {
              setEdit(!edit);
            }
          }}><TbEdit /></span>
          <span className="icon" onClick={() => handleDeleteFunc(task.id)}><RiDeleteBin2Fill /></span>
          <span className="icon" onClick={() => handleIsCompletedFunc(task.id)}><IoCheckmarkDoneCircleSharp /></span>
    </form>
  )
}

export default Task
