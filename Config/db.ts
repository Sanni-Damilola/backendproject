import mongoose from "mongoose";

const url: string = "mongodb://localhost/project";
const cloudurl: string =
  "mongodb+srv://sannidatabase:sannidatabase@cluster0.zh68ie9.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(cloudurl);
mongoose.connection
  .on("open", () => {
    console.log("connected");
  })
  .once("error", (error) => {
    console.log("An error occured", error);
  });
