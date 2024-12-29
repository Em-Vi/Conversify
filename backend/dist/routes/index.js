import { Router } from "express";
import userRouter from "./user-routes.js";
import chatsRouter from "./chat-routes.js";
const appRouter = Router();
// mind the use
appRouter.use("/user", userRouter); //domain/api/v1/user
appRouter.use("/chat", chatsRouter); //domain/api/v1/chat
export default appRouter;
//# sourceMappingURL=index.js.map