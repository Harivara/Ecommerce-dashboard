import orderModel from "../models/orderModel.js"

export const createorder=async(req,res)=>{
    try{
        const {user,amount,name} = req.body
        if(!user){
            res.send({message:"No user Id"})
        }
        if(!amount){
            res.send({message:"No price mentioned"})
        }
        if(!name){
            res.send({message:"No name mentioned"})
        }
        const order=await new orderModel({
            user,
            amount,
            name
        }).save()

        await order.populate('user')
        res.send({
            success:true,
            order
        })
    }
    catch(error){
        console.log("Error in creating order")
    }
}

export const getallorders= async(req,res)=>{
    try{
        const orders=await orderModel.find()
        res.send({
            success:true,
            orders,
            total:orders.length
        })
    }
    catch(error){
        console.log("ERrro in backend")
    }
    
}

export const singleorder =async (req,res)=>{
    try{
        const {id}=req.params
     
        if(!id){
            res.send({
                success:false,
                message: "Id Invalid"
            })
        }
        const singleorder=await orderModel.findById(id)

        if(!singleorder){
            res.send({
                success:false,
                message: "Order Id Invalid"
            })
        }
        res.send({
            success:true,
            singleorder
        })
    }
    catch(error){
        console.log("Error in single order")
    }
}

export const orderupdate = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        // Validate ID
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Invalid ID."
            });
        }

        // Validate Status
        if (!status) {
            return res.status(400).json({
                success: false,
                message: "Status is required."
            });
        }

        // Find the order by ID
        const singleOrder = await orderModel.findById(id);

        if (!singleOrder) {
            return res.status(404).json({
                success: false,
                message: "Order not found."
            });
        }

        // Update the order status
        singleOrder.status = status;
        const updatedOrder = await singleOrder.save();

        // Send success response with the updated order details
        return res.status(200).json({
            success: true,
            message: "Order status updated successfully.",
            order: updatedOrder
        });

    } catch (error) {
        console.error("Error in update:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error.",
            error: error.message
        });
    }
};

export const recentorders = async (req, res) => {
    try {
        const recent = await orderModel.find().sort({ createdAt: -1 }).limit(6).populate("user");
        res.send({
            success: true,
            recent
        });
    } catch (error) {
        console.log("Error in recent orders:", error);
        res.status(500).send({
            success: false,
            message: "Failed to retrieve recent orders",
            error: error.message
        });
    }
};
