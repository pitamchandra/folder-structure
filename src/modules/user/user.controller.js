import { catchAsync } from "../../utils/catchAsync.js";
import { createUserService } from "./user.service.js";
import { sendResponse } from "../../utils/sendResponse.js"


export const createUser = catchAsync(async (req, res) => {
  const data = await createUserService(req.body);
  return sendResponse(res, { statusCode: 201, message: "user created successfully", data})
})