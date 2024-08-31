import mongoose from 'mongoose'

const orderModel=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"User"
    },
    name:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required: true
    },
    status:{
        type: String,
        default:"Pending"
    }
}, {timestamps:true}
)
export default mongoose.model("Orders", orderModel)