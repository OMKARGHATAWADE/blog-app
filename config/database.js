import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((error) => {
      console.log("Connection Failed");
      console.log(error);
    });
};
