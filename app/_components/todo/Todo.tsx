import React, { Suspense } from 'react'
import { TodoItemsProps } from './AllTodo'
import DoneTodo from './DoneTodo'
import DeleteTodo from './DeleteTodo'
import { Skeleton } from '@/components/ui/skeleton'

interface TodoItemProps {
    todo: TodoItemsProps
}
const Todo = ({todo}: TodoItemProps) => {
  return (
    //uppetcase: all letters are Capital
    //lovercase class: all letters are lowercase
    //capitalize: all letters: staring word first letter is capital
    <li className='flex justify-between gap-x-6 py-5  capitalize'>
        <div className='flex min-w-0 gap-x-4'>
            <p className={`text-sm font-semibold leading-6 ${todo.isDone && 'line-through'}`}>{todo.title}</p>
            {/* line-through: is a line that pass the text */}
        </div>

        <div className='flex '>
            <span className='isolate inline-flex space-x-2'>
                <DoneTodo todoId = {todo._id} isDone = {todo.isDone} />
                <DeleteTodo todoId={todo._id} todoTitle = {todo.title}/>
            </span>
        </div>
    </li>

  )
}

export default Todo