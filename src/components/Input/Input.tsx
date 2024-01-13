import React, { FormEvent } from 'react'
import { Dispatch, SetStateAction, FC } from 'react';
import './InputStyles.css'


interface TaskProps {
  task : string;
  setTask : Dispatch<SetStateAction<string>>;
  handleAddTask : (e : FormEvent) => void; 
}


const Input: FC<TaskProps> = ({ task, setTask, handleAddTask }) => {
  return (
    <div>
        <form className='input-form' onSubmit={(e) => handleAddTask(e)}>
            <input type="input" placeholder='Enter a Task' className='input__box' value={task} onChange={(e) => setTask(e.target.value)}/>
            <button className='input_submit'>Add</button>
        </form>
    </div>
  )
}

export default Input
