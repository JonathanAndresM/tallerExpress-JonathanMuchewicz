import { Schema, model } from "mongoose";

const collection = "invoices"
let schema = new Schema({
    date: { type: Date, required: true },
    description: { type: String, required: true },
    worth: { type: Number, required: true },
    asset: { type: Boolean, required: true },
    user: { type: Schema.Types.ObjectId, ref: "users", required: true }
}, {
    timestamps: true
})

let Bill = model(collection, schema)

export default Bill