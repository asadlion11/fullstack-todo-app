'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import toast from 'react-hot-toast'
import AllTodo from './AllTodo'
import { useRouter } from "next/navigation"

const TodoForm = () => {
    // const [title, setTitle] = useState<string | null>(null)
    const [title, setTitle] = useState<string>('')
    const router = useRouter()

    const getTitleValue = (event: React.FormEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value)
    }
    //console.log(title)

    //post data
    const hanldeSubmit = async (event: React.FormEvent) => {
      //stop refreshing the page
      event.preventDefault()
      //data that will create the db
      // const todoData = {
      //   title
      // }

      //fetch api to post(request) the data from ui
      try {
        // Send a POST request to the API with the form data as JSON
        const res = await fetch('http://localhost:3000/api/todo', {
          method: 'POST',
          // POST with JSON body — title won’t appear in the URL
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(title)
        })
        // Parse the JSON response from the server
        // await res.json()
        // print/display the response

        // console.log("Todo Added Sucessfully")
        toast.success('Todo added sucessfully')
        setTitle('')
        router.refresh()
        
        // toast.success('Todo Added Successfully', {
        //   position: "bottom-center"
        // });
        
      } catch (error) {
        // print errors that occur during the fetch 
        console.error(error)
        toast.error("Failed to add new todo")
      }

    }

    // const handleSubmit = async (event: React.FormEvent) => {
    //   // Prevent the default form submission behavior (page reload)
    //   event.preventDefault()
    //   // Get the form element from the event
    //   const form = event.target as HTMLFormElement
    //   // Create a FormData object to easily access form fields
    //   const formData = new FormData(form)
    //   // Extract the 'title' field from the form data
    //   const data = {
    //     title: formData.get('title')
    //   }
      
    //   try {
    //     // Send a POST request to the API with the form data as JSON
    //     const response = await fetch('http://localhost:3000/api/todo', {
    //       method: 'POST',
    //       body: JSON.stringify(data)
    //     })
    //     // Parse the JSON response from the server
    //     await response.json()
    //     // Log the response object for debugging
    //     console.log(response)
          //toast.success('Todo added sucessfully')
          //form.reset()
        
    //   } catch (error) {
    //     // Log any errors that occur during the fetch
    //     console.error(error)
    //   }
    // }

  return (
    <form className='w-full' onSubmit={hanldeSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title" className='text-md'>Title</Label>
              <Input id='title' name="title" value={title} onChange={getTitleValue} placeholder="Name of your title" 
              className='border-slate-200 focus:ring-1 focus:ring-slate-300'
              />
            </div>
          </div>
        </form>
  )
}

export default TodoForm