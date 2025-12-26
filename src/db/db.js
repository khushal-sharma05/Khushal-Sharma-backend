import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB =async ()=>{
    try {
       const connectDB= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`/n mongodb connect !! DB HOST${connectDB.connection.host}`);
       
    } catch (error) {
        console.log(" mongodb connect error",error);
        process.exit(1)
    }
} 
export default connectDB
    