import mongoose from "mongoose";

const connectToDB = async () => {
  await mongoose.connect(process.env.url).then(
    () => {
      console.log("MONGODB CONNECTED");
    },
    (err) => {
      console.log(error);
      process.exit(1);
    }
  );
};

export default connectToDB;
