import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

// Load environment variables
dotenv.config(); 

const connectDB = async () => {
  try {
    // Construct the MongoDB URI using environment variables
    const uri = `${process.env.MONGODB_URI}/${DB_NAME}`;
    
    // Log the connection URI for debugging purposes
    console.log("MongoDB URI:", uri); 

    // Connect to MongoDB
    const connectionInstance = await mongoose.connect(uri);
    console.log(`\nMongoDB Connected! DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB CONNECTION ERROrrrrrrrrrrr:", error);
    process.exit(1); // Exit the process with failure if connection fails
  }
};

export default connectDB;
