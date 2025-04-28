'use client'
import { Button } from '@/components/ui/button'
import { API_URL } from '@/lib/config'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
 
const DoneTodo = ({todoId, isDone}: {todoId: string, isDone: boolean}) => {
    const router = useRouter()
    const handlDone = async () => {
      try {
        const newStatus = !isDone
        //varible newStatus (frontend) === variable isDone (backend(in app/api/todo/id/route.ts(inside PUT fucntion)))
        
        await fetch(`${API_URL}${todoId}`, {
          method: 'PUT',
          //sending the ui
          //Send data by converting it to JSON using JSON.stringify()
          body: JSON.stringify(newStatus) // <-- sending newStatus
        })
        router.refresh()
        newStatus 
          ? toast('The task is Done ✅', {
            // icon: false,
          })
          : toast('The task is not Done! ❌', {
            // style: { fontWeight: 'bold' },
          }) 
      } catch (error) {
        console.error(error)
        toast.error("Failed to update the todo")
      }
    }

  return (
    <div>
        <Button 
        className={`relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold cursor-pointer 
        ${isDone ? 'bg-green-600 text-white' : 'bg-slate-100 text-black'}`}
        onClick={handlDone}
        >
            {isDone ? 'UnDone' : 'Done'}
        </Button>
    </div>
  )
}

export default DoneTodo