// src/modules/user/user.router.js

import { Router } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { getMe } from "./user.controller.js";

// module router
const router = Router();

router.get("/me", catchAsync(getMe));

// export router
export default router;
