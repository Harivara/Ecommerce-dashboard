import express from 'express'
import { requireSignIn } from '../middleware/authmiddleware.js'
import { createorder, getallorders, orderupdate, recentorders, singleorder } from '../controller/ordercontroller.js'

const router=express.Router()

router.post("/create-order",requireSignIn,createorder)
router.get("/all-orders",getallorders)
router.get("/single-order/:id",singleorder)

router.put("/order-update/:id",orderupdate)
router.get("/getlatest",recentorders)

export default router