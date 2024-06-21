import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI!);
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/food_delivery"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
