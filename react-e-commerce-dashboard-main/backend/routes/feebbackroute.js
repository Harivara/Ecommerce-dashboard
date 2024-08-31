import express from 'express'
import { createFeedback, getfeedback } from '../controller/feedbackcontroller.js'

const router=express.Router()

router.post("/create-feedback",createFeedback)
router.get("/get-feedback",getfeedback)

export default router