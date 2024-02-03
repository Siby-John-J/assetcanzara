
import mongoose from "mongoose";

export default async function connect() {
    const id: any = process.env.MONGODB_ID
    await mongoose.connect(id)
    console.log('connected to db...')
}