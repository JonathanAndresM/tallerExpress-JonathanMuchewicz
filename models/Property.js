import { Schema,model } from "mongoose";

const collection = "properties"
let schema = new Schema({
    name: {type:String, required:true},
    type: {type:String, required:true},
    worth: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: "users", required: true }
},{
    timestamps:true
})

let Property = model(collection,schema)

export default Property