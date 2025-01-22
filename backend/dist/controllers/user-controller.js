import User from "../models/User.js";
import { compare, hash } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME, TOKEN_EROR } from "../utils/constants.js";
export const getAllUsers = async (req, res, next) => {
    //get all users
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
};
export const userLogin = async (req, res, next) => {
    //user login
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send("User not registered");
        }
        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Incorrect password");
        }
        // create token and store cookies
        // These are attributes of cookies btw
        res.clearCookie(COOKIE_NAME, {
            
            httpOnly: true,
            signed: true,
            path: "/",
        });
        const token = createToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            
            expires,
            httpOnly: true,
            signed: true,
        });
        return res
            .status(200)
            .json({ message: "OK", name: user.name, email: user.email });
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ messsage: "ERROR", cause: error.message });
    }
};
export const verifyUser = async (req, res, next) => {
    // Token Checker
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send(TOKEN_EROR);
        }
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Credentials didn't match");
        }
        return res
            .status(200)
            .json({ message: "OK", name: user.name, email: user.email });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ messsage: "ERROR", cause: error.message });
    }
};
export const userSignup = async (req, res, next) => {
    //user signup
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(401).send("User already registered");
        const hashedPassword = await hash(password, 10);
        //shorthand syntax
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        // Clear exisitng cookies
        res.clearCookie(COOKIE_NAME, {
            
            httpOnly: true,
            signed: true,
            path: "/",
        });
        const token = createToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        // create token and store cookies
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            
            expires,
            httpOnly: true,
            signed: true,
        });
        return res
            .status(201)
            .json({ message: "OK", name: user.name, email: user.email });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ messsage: "ERROR", cause: error.message });
    }
};
export const userLogout = async (req, res, next) => {
    // Token Checker
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send(TOKEN_EROR);
        }
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Credentials didn't match");
        }
        // Clear cookie when logout
        res.clearCookie(COOKIE_NAME, {
            
            httpOnly: true,
            signed: true,
            path: "/",
        });
        return res
            .status(200)
            .json({ message: "OK" });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ messsage: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controller.js.map