import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";

const connectDB = async () => {
  try {
    const connectionResponse = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      "MongoDb connect Successfull",
      connectionResponse.connection.host
    );
  } catch (error) {
    console.log("MongoDb connection Failed", error);
  }
};

export default connectDB;
