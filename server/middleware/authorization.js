const {Food} = require("../models")
 function authorization(req,res,next){

    let id = req.params.id
    
    Food.findOne({
        where:{id:id}
    })
    .then(data=>{
        if(!data){
            res.status(404).json("data not found")
        }
        else{
            if(data.UserId===req.user.id){
                next()
            }
            else{
                res.status(400).json("forbiden access")
            }
        }
    })
    .catch(err=>{
        console.log(err);
    })
}
module.exports=authorization;