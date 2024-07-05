import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"



const key="HarshitAgarwal"
const createToken = (id) => {
    return jwt.sign({ id },key );
}


// Login User
const login = async (req, res) => {
    const{email, password}= req.body;
    try {
        const userExists = await userModel.findOne({email});
        if(!userExists){
            return res.status(400).json({message:"User Doesn't Exist"});
        }
        const passwordMatch =await  bcrypt.compare(password,userExists.password);
        if(!passwordMatch){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        const token = createToken(userExists._id);
        return res.status(200).json({message:"Login Successful",token})
    } catch (error) {
        res.status(400).json({message:error})
    }

}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User Already Exists" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Please Enter Valid Email" })
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Please Enter a strong password" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        return res.status(200).json({message:"User Created Successfully", token:token });

    } catch (error) {
        res.status(400).json({ message: error });
    }

}

export { login, registerUser }