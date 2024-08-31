import feedbackModel from "../models/feedbackModel.js"

export const createFeedback=async(req,res)=>{
    try{
        const {user,star,description}=req.body
        if(!user){
            res.send({message:"No user Id"})
        }
        if(!star){
            res.send({message:"No Star"})
        }
        if(!description){
            res.send({message:"No description"})
        }
        const feedback= await new feedbackModel({
            user,
            star,
            description
        }).save()
        res.send({
            success:true,
            feedback
        })
    }
    catch(error){
        console.log("Error in creating Feedback")
    }
}

export const getfeedback=async(req,res)=>{
    try{
        const feedback = await feedbackModel.find().sort({createdAt:-1}).limit(3).populate("user")
        res.send({
            success:true,
            feedback
        })
    }
    catch(error){
        console.log("Error in getting feedback")
    }
}