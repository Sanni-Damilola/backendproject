import express, { Response, Request, Application } from "express";
import route from "./Routes/route";

const app: Application = express();
app.use(express.json());
const port: number = 2001;
require("./Config/db");

app.all("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    messsage: "on",
  });
});

app.use("/api", route);

app.listen(port, () => {
  console.log("done");
});
