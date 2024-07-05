import express from "express"
import authMiddleware from "../middleware/auth.js";
import { listOrders, placeOrder, updateStatus, usersOrder, verifyOrder } from "../controllers/orderControllers.js";


const orderRouter= express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorder",authMiddleware,usersOrder);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",updateStatus);

export default orderRouter;