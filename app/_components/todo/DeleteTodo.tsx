'use client'
import { Button } from '@/components/ui/button'
import { API_URL } from '@/lib/config'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

// interface TodoIdItem {
//     todoId: string
// }
// const DeleteTodo = ( {todoId}:  TodoIdItem) => {
//     const handlDone = () => {
//         console.log("Deleted")
//     }
const DeleteTodo = ( {todoId, todoTitle}:  {todoId : string, todoTitle: string}) => {
    const router = useRouter()
    const handleDelete = async () => {
      if (window.confirm(`Are you sure you want to delete ${todoTitle} todo?`)) {
        try {
          await fetch(`${API_URL}/api/todo/${todoId}`, {
            method: 'DELETE',
          })
          router.refresh()
          toast.success("The todo delted successfully")
        } catch (error) {
          console.error(error)
          toast.error("Failed to delete the todo")
      }
        return
    }
  }
            
  return (
    <div>
        <Button 
        className={`relative inline-flex items-center bg-red-500 px-3 py-2 text-sm font-semibold text-white  cursor-pointer hover:bg-red-600 focus:z-10`}
        onClick={handleDelete}
        >
            Delete
        </Button>
    </div>
  )
}
export default DeleteTodo