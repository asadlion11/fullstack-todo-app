import { Model, model, models, Schema } from "mongoose"

//preparing Shape using interface
// A Todo document in MongoDB
interface TodoDocument extends Document {
    title: string,
    isDone: boolean
}

//preparing Schema
const todoSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    isDone : {
        type: Boolean,
        default: false
    }
},
{
    // Automatically add `createdAt` / `updatedAt`
    timestamps: true
}
)

// //creating model
// const TodoModel = models.Todo || model("Todo", todoSchema) // model needs schema

// //exporting moel
// export default TodoModel as Model<TodoDocument> //<todoDocument > is model type

const TodoModel = 
    (models.Todo as Model<TodoDocument>) // reuse existing model
    || model<TodoDocument>("Todo", todoSchema) // create new model


export default TodoModel