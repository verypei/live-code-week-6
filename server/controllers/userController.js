const {User} = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class userController{
    static register(req,res){
        let obj = {
            email:req.body.email,
            password:req.body.password
        }
        User.create(obj)
        .then(data=>{
            // console.log(data,"===============")
            let access_token = jwt.sign({id:data.id,email:data.email},process.env.SECRET)
            res.status(201).json({id:data.id,email:data.email})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    static login(req,res){
        let email = req.body.email
        let password = req.body.password
        User.findOne({where:{email:email}})
        .then(data=>{
            if(!data){
                res.status(400).json("email wrong")
            }
            else{
                if(bcrypt.compareSync(password,data.password)){
                    let access_token = jwt.sign({id:data.id, email:data.email},process.env.SECRET)
                    res.status(200).json({token:access_token})
                }
                else{
                    res.status(400).json("wrong password")
                }
            }
        }).catch(err=>{
            console.log(err)
        })
    }
}
module.exports=userController