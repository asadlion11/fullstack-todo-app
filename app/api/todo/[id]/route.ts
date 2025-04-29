import dbConnection from "@/app/lib/db"
import TodoModel from "@/app/models/todoModel"
import { NextRequest, NextResponse } from "next/server"
//params: give the the updating id
interface Params {
    id: string
}

//Update Method(PUT) 
//Update The Data specially the isDone field
//get the id of todo you want to update((to get the todo id use params))
// id: is the identifier the todo what you are updating
export const PUT = async (req: NextRequest, {params} : {params: Promise<Params>}) => {
    try {
        await dbConnection()
        // Receive and parse JSON data using req.json()
        //// Server receives and parses JSON body from the client into isDone
        const isDone = await req.json() // <-- receiving newStatus into isDone
        //varible newStatus (frontend(app/components/DoneTodo(inside handleDone function))) === variable isDone (backend)
        await TodoModel.findByIdAndUpdate((await params).id, {isDone: isDone})
        return NextResponse.json({message: "Todo updated successfully"}, {status: 200})
    } catch (error) {
        console.error(error)
    }
}

////Delete Method(DELETE)
//get the id of todo you want to delete(to get the todo id use params)
// id: is the identifier the todo what you are updating
export const DELETE = async (req: NextRequest, {params} : {params: Promise<Params>}) => {
    try {
        await dbConnection()
        await TodoModel.findByIdAndDelete((await params).id)
        return NextResponse.json({message: "Todo deleted successfully"}, {status: 200})
    } catch (error) {
        console.error(error)
    }
}