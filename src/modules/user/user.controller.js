import { catchAsync } from "../../utils/catchAsync.js";
import { createUserService, getAllUsersService } from "./user.service.js";
import { sendResponse } from "../../utils/sendResponse.js"


export const createUser = catchAsync(async (req, res) => {
  const data = await createUserService(req.body);
  return sendResponse(res, { statusCode: 201, message: "user created successfully", data})
})

export const getAllUsers = catchAsync(async (req, res) => {
  const data = await getAllUsersService();
  return sendResponse(res, {statusCode: 200, message: "users retrieved successfully", data})
})