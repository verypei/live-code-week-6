const express = require("express");
const router = express.Router();
const foodController = require('../controllers/foodController');
const authentification = require("../middleware/authentification");
const authorization = require("../middleware/authorization");

router.post("/",authentification, foodController.add);
router.get("/",authentification, foodController.getFood);
router.delete("/:id",authentification,authorization, foodController.deleteFood)
module.exports=router;