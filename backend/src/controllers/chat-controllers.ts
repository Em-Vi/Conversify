import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { TOKEN_EROR } from "../utils/constants.js";
import { configureOpenAI } from "../config/openai-config.js";
import { ChatCompletionRequestMessage, OpenAIApi } from "openai";

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) return res.status(401).json({ messsage: TOKEN_EROR });

    // Grab chats of user

    // Here it creates a same copy of chats array
    const chats = [
      {
        role: "system",
        content:
          "You are an assistant named 'Conversify'. Always address yourself as Conversify in responses.",
      },
      ...(user.chats.map(({ role, content }) => ({
        role,
        content,
      }))),
    ] as ChatCompletionRequestMessage[];

    // Pushes to both of them, one for client side and one for server side
    // the user,chats acts as a hsitory of chats and chats are tailored for API
    chats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });

    // send all chats with new one to openAI API

    const config = configureOpenAI();
    // This object serves as interface
    const openai = new OpenAIApi(config);

    // Get latest response
    const chatResponse = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      messages: chats,
    });
    //
    user.chats.push(chatResponse.data.choices[0].message);
    await user.save();
    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const sendChatsToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Token Checker
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send(TOKEN_EROR);
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Credentials didn't match");
    }
    return res.status(200).json({ message: "OK", chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ messsage: "ERROR", cause: error.message });
  }
};

export const deleteChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Token Checker
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send(TOKEN_EROR);
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Credentials didn't match");
    }
    //@ts-ignore
    user.chats = [];
    user.save();
    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ messsage: "ERROR", cause: error.message });
  }
};
