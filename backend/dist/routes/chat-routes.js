import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompletionValidator, validate } from "../utils/validator.js";
import { deleteChats, generateChatCompletion, sendChatsToUser, } from "../controllers/chat-controllers.js";
// Protected API
const chatsRouter = Router();
chatsRouter.post("/new", validate(chatCompletionValidator), verifyToken, generateChatCompletion);
chatsRouter.get("/all-chats", verifyToken, sendChatsToUser);
chatsRouter.delete("/delete", verifyToken, deleteChats);
export default chatsRouter;
//# sourceMappingURL=chat-routes.js.map