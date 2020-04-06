const express = require("express");
const router = express.Router();
const foodRouter = require("./foodRouter")
const userRouter = require("./userRouter");


router.use("/foods",foodRouter)
router.use("/users",userRouter)
module.exports=router