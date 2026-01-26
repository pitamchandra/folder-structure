// src/modules/user/user.controller.js

import { sendResponse } from "../../utils/sendResponse.js";

// controller = request receive করে response দেয়
export const getMe = async (req, res) => {
  // ভবিষ্যতে এখানে req.user থাকবে (auth middleware দিয়ে)
  // এখন demo data
  return sendResponse(res, {
    message: "User profile fetched",
    data: { id: "demo", name: "Nizam" },
  });
};
