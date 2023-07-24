import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    Faculty:{
        type:String,
        required:[true,"Please provide a Faculty"],
    },
    Major:{
        type:String,
        required:[true,"Please provide a Major"],
    },
    idcard:{
        type:String,
        required:[true,"Please provide a idcard"],
    },
    birthday:{
        type:String,
        required:[true,"Please provide a  birthday"],
    },
    firstname:{
        type:String,
        required:[true,"Please provide a  firstname"],
    },
    lastname:{
        type:String,
        required:[true,"Please provide a lastname"],
    },
    email:{
        type:String,
        required:[true,"Please provide a email"],
    },
   tell:{
        type:String,
        required:[true,"Please provide a tell"],
    },
    
  
})

const International = mongoose.models.International || mongoose.model("International",registerSchema)
export default International;