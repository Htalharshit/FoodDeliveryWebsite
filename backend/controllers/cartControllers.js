import userModel from '../models/userModel.js'


// Add Items to user cart
const addToCart = async (req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1;
        }
        else{
            cartData[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.status(200).json({message:"Added to Cart"});
    } catch (error) {
        res.status(400).json({message:"Error"});
    }

}

//Remove Items from users cart
const removeFromCart=async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.status(200).json({message:"Removed From Cart"});
    } catch (error) {
        res.status(400).json({message:"Error"});
    }
}


//Fetch user cart data
const getCart=async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.status(200).json({cartData});
    }catch (error) {
        res.status(400).json({message:"Error"});
    }
}

export {addToCart,removeFromCart,getCart}