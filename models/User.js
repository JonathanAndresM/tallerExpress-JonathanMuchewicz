import { Schema, model } from "mongoose";

let collection = "users"
let schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    direction: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    photo: { type: String, required: true },
    role: { type: Number, required: true },
    online: { type: Boolean }
}, {
    timestamps: true
})

let User = model(collection, schema)
export default User