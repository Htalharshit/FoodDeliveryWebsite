import jwt from "jsonwebtoken"

const key="HarshitAgarwal"

const authMiddleware = async(req,res,next)=>{
    const {token} =req.headers;
    if(!token){
        return res.status(400).json({message:"Not Authorized - Please Login "})
    }
    try {
        const decodedToken = jwt.verify(token,key);
        req.body.userId = decodedToken.id;
        next();
    } catch (error) {
        res.status(400).json({message:error});
    }
}


export default authMiddleware;