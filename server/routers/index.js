const express = require("express");
const router = express.Router();
// const foodRouter = require("")
// const userRouter = require("")


router.use("/foods",foodRouter)
router.use("/users",userRouter)
module.exports=router