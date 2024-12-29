import { connect, disconnect } from "mongoose";
const connectToDatabase = async () => {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot connect to MongoDB");
    }
};
const disconnectFromDatabase = async () => {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("cannot disconnect from MongoDB");
    }
};
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map