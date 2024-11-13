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
    online: { type: Boolean },
    invoices: [{ type: Schema.Types.ObjectId, ref: "invoices"}],
    properties: [{ type: Schema.Types.ObjectId, ref: "properties"}]
}, {
    timestamps: true
})

let User = model(collection, schema)
export default User