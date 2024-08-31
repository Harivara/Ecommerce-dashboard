import mongoose from 'mongoose'

const FeedbackModel = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    star:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})

export default mongoose.model("Feedback",FeedbackModel)