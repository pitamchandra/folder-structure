// src/modules/user/user.router.js

import { Router } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { createUser } from "./user.controller.js";

// module router
const router = Router();

router.post('/', createUser)

// export router
export default router;
