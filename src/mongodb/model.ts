
import { Schema, model, models } from "mongoose"

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String
})

const adminSchema = new Schema({
    username: String,
    password: String
})

let userModel = models.Users || model("Users", userSchema)
let adminModel = models.Admin || model("Admin", adminSchema)

export { userModel, adminModel }
