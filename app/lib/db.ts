import mongoose from "mongoose";

let connection: typeof mongoose
const mongo_url = process.env.MONGO_URL as string

const dbConnection = async () => {
    try {
        // if(!connection) {
        //     connection = await mongoose.connect(mongo_url)
        // }
        connection = connection ?  connection : await mongoose.connect(mongo_url) 
        return connection
    } catch (err) {
        throw new Error(err as any ).message
    }
}

export default dbConnection