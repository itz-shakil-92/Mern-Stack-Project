import mongoose from "mongoose"
import {DB_NAME} from "../src/constants.js"

const connectDB = async () => {
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
        useNewUrlParser: true,       // Prevent deprecation warnings
        useUnifiedTopology: true      // Ensure stable connection handling
      });
      console.log(`\nMongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
      console.error("MONGODB connection error", error);
      process.exit(1);  // Exit the process on failure
    }
  };


export default connectDB;
