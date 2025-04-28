import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Todo from './Todo';
import { API_URL } from '@/lib/config';

//multiple type of a variable: interface always write as object
export interface TodoItemsProps {
    _id: string;
    title: string;
    isDone: boolean
}

export const AllTodo = async () => {
        // const res = await fetch("http://localhost:3000/api/todo",  {
        //     method:'GET'
        // })
        const res = await fetch(`${API_URL}/api/todo`,{cache: 'no-cache'})
        //res: will back multiple value with differnet type, so we need interface when using that interface must mention as array, TodoItemsProps our interface but we will use as array: TodoItemsProps[], basuce the res data is array of objects
        const todoList: TodoItemsProps[] =  await res.json()
        // console.log(todoList)
   

  return (
    <Card className='w-full my-10 border-slate-300'>
        <CardHeader>
            <CardTitle className='text-xl'>All Todos</CardTitle>
            <CardDescription className='opacity-60'>All your todos and their status</CardDescription>
        </CardHeader>
        <CardContent>
            {/* {
                todoList.map((todo) => (
                    <ul key={todo._id}>
                        <li>{todo.title}</li>
                    </ul>
                ))
            } */}
            {/* divide-y hozrizaontal line b/w list */}
            <ul role='list' className='divide-y divide-slate-300'>
            {
                todoList.map((todo) => (
                    // component that display one todo
                    <Todo key={todo._id} todo = {todo}/>
                ))
            }
            </ul>
        </CardContent>
        </Card>
  )

}
export default AllTodo