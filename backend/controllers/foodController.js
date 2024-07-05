import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item

const addFood = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`;
        const food = await foodModel.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        })
        res.status(200).json({ message: "Food Added Successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Some Error occured" })
    }
}


// List All food
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.status(200).json({ data: foods });
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: "Some error occured" });
    }

}


// Remove food Item
const removeFood = async(req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});
        await foodModel.findByIdAndDelete(req.body.id);
        res.status(200).json({msg: "Item removed successfully"})
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "Some error occured" });
    }
}

export { addFood, listFood,removeFood }