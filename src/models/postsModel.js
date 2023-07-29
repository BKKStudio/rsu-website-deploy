import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please provide a title"],
    },
    summary:{
        type:String,
        required:[true,"Please provide a summary"],
    },
    content:{
        type:String,
        required:[true,"Please provide a content"],
    },
    cover:{
        type:String,
        required:[true,"Please provide a  birthday"],
    },
    author:{
        type:String,
        required:[true,"Please provide a  firstname"],
    },
    createdat:{
        type:String,
        required:[true,"Please provide a lastname"],
    },
    updateat:{
        type:String,
        required:[true,"Please provide a email"],
    },
})

const Posts = mongoose.models.Posts || mongoose.model("Posts",postsSchema)
export default Posts;