import mongoose from "mongoose";

const connectMongodb = () => {

    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("connected");

    } catch(error) {

        console.log(error);



    }


};

export default connectMongodb;