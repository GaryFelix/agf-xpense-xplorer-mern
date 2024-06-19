import express, { Express } from "express";
import cors from "cors";
import mongoose from "mongoose";
import xpenseRecordRouter from "./routes/xpense-routes";

const app: Express = express();
const port = process.env.PORT || 3001;

//middlewares
app.use(express.json());
app.use(cors());

//mongoDB Connection
const mongoURI: string =
"mongodb+srv://2k19cse020:JyjMdPz7e0pJT93V@xpensexplorer.kusdqe0.mongodb.net/";

mongoose
.connect(mongoURI)
.then(() => console.log("MongoDB is connected"))
.catch((err) => console.log("Not connected to MongoDB: ", err));

app.use("/xpense-xplorer", xpenseRecordRouter);

//Port is listening at 3001 or env
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
