import mongoose from "mongoose";
import { Express } from "express";
import { DB_NAME } from "./constants";

// const app = Express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error(error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// })();
