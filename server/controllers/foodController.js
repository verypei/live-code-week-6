const {Food} = require("../models")

class foodController{
    static add(req,res){
        let obj = {
            title: req.body.title, 
            price: req.body.price, 
            ingredients: req.body.ingredients, 
            tag: req.body.tag,
            UserId: req.user.id
        }
        Food.create(obj)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    static getFood(req,res){
        Food.findAll({where:{UserId:req.user.id}})
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    static deleteFood(req,res){
        let id = req.params.id
        Food.destroy({where:{id:id}})
        .then(data=>{
            res.status(200).json("data successfully removed")
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

module.exports=foodController;