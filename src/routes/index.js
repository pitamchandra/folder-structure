
import { Router } from "express";
import userRouter from "../modules/user/user.router.js";

const router = Router();

router.get('/health', (req, res) => {
    res.send("API is healthy");
})

router.use("/users", userRouter);

export default router;
