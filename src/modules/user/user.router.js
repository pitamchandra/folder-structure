// src/modules/user/user.router.js

import { Router } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { createUser, getAllUsers } from "./user.controller.js";

// module router
const router = Router();

// router.post('/', createUser)
router.get("/", getAllUsers)

// export router
export default router;
