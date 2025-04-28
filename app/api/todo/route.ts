import dbConnection from "@/app/lib/db";
import TodoModel from "@/app/models/todoModel";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextApiRequest) {
//     return NextResponse.json("Hello from backend", {status: 200})
// }

//GET Method: //READ Data
export const GET = async (req: NextRequest) => {
    try {
        dbConnection()
        const allTodos = await TodoModel.find().sort({createdAt: "desc" , isDone: "asc"})
        return NextResponse.json(allTodos, {status: 200})
    } catch (error) {
        console.error(error)
    }
}

//POST Method: //CREATE Data
//step 1: Create POST Function
export const POST = async (req: NextRequest) => {
   try {
     //step 2: call the connection(database connection) function
     await dbConnection()
     //step 3: get/catch body data/passed data
     const title = await req.json()
     //step 4: Use model/Create data/POST data
     const newTodo = new TodoModel({
        title: title
     })
     //step 5: Save data/save model
     await newTodo.save()
     //step 6: return response
     return NextResponse.json({message: "Todo created successfully", newTodo}, {status: 201})
   } catch (error) {
    console.error(error)
   }
}