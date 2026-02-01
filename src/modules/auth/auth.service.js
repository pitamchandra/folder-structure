import bcrypt from "bcryptjs";
import { env } from "../../config/env.js";
import AppError from "../../utils/AppError.js";
import { User } from '../user/user.model.js'



const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const registerService = async (payload) => {
    const role = String(payload?.role || "").trim();
    const email = payload?.email ? String(payload.email).trim().toLowerCase() : null;
    const phone = payload?.phone ? String(payload.phone).trim() : null;
    const password = payload?.password ? String(payload.password) : "";
    if (!["customer", "provider"].includes(role)) {
        throw new AppError("Invalid role. only customer/provider allowed", 400)
    }

    if (!email && !phone) {
        throw new AppError("email or phone number is required", 400)
    }

    if (email && !isValidEmail(email)) {
        throw new AppError("invalid email", 400)
    }

    if (password.length < 6) {
        throw new AppError("password should be minimum 6", 400)
    }

    if (email) {
        const exists = await User.findOne({ email })
        if (exists) {
            throw new AppError('email already exist', 409)
        }
    }
    if (phone) {
        const exist = await User.findOne({ phone })
        if (exist) {
            throw new AppError('phone number is already exist', 409)
        }
    }

    const hashPassword = await bcrypt.hash(password, env.BCRYPT_SALT_ROUNDS)

    const user = await User.create({
        role,
        email: email || undefined,
        phone: phone || undefined,
        hashPassword: hashPassword,
    })
    return ({
        id: user._id,
        role: user.role,
        email: user.email || null,
        phone: user.phone || null,
    })
}

