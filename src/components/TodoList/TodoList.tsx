import React from 'react'
import { FC } from 'react'
import { TaskModelInterface } from '../../Model/taskModel'
import { Dispatch, SetStateAction } from 'react'
import './TodoListStyles.css'
import Task from '../Task/Task'

interface TasksProps {
    tasks : TaskModelInterface[]
    setTasks : Dispatch<SetStateAction<TaskModelInterface[]>>

}
const TodoList : FC<TasksProps> = ({ tasks, setTasks}) => {
  return (
    <div className='tasks'>
        { tasks.map((task) => (
            <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks}/>
        ))}
    </div>
  )
}

export default TodoList
