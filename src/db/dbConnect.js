import mongoose from "mongoose";

const dbConnect = (connectStr)=>{

    return mongoose.connect(connectStr);

}
export default dbConnect