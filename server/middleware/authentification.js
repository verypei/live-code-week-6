const jwt = require("jsonwebtoken");

const authetification = (req,res,next)=>{
    try {
        const {token}=req.headers
        if(!token){
            res.status(404).json("token not found")
        }
      else{
          const decoded = jwt.verify(token,process.env.SECRET)
          req.user=decoded
          next()
      } 
    } catch (error) {
        res.status(400).json("forbiden access")
    }
}
module.exports=authetification