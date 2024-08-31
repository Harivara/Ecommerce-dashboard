import userModel from "../models/userModel.js"
import JWT from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const register = async (req,res) =>{
    try{
        const {name,email,phone,password}=req.body
    if(!name){
        return res.send({message:"Please enter Name"})
    }
    if(!email){
        return res.send({message:"Please enter Email"})
    }
    if(!password){
        return res.send({message:"Please enter Password"})
    }
    if(!phone){
        return res.send({message:"Please enter Phone"})
    }
        const existinguser=await userModel.findOne({email})
        if(existinguser){
            res.send({message:"User already exist"})
        }

        const user=await new userModel({name,email,password,phone}).save()

        res.send({
            success:true,
            message:"User created",
            user
        })
    }
    catch(error){
        console.log(error)
    }
    
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email) {
            return res.status(400).send({ message: "Please enter email" });
        }
        if (!password) {
            return res.status(400).send({ message: "Please enter password" });
        }

        // Find the user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.send({ message: "Email is not registered" });
        }

        // Check if the password matches
        const match = (password === user.password); // Consider using bcrypt for secure password comparison
        if (!match) {
            return res.send({ message: "Incorrect password" });
        }

        // Generate a JWT token
        const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        // Send the response
        return res.status(200).send({
            success: true,
            user,
            message: "User logged in",
            token
        });

    } catch (error) {
        console.error("Error during login", error);
        return res.status(500).send({ message: "Internal server error" });
    }
};
