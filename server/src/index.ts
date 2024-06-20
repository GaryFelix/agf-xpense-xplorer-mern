import express, { Express } from "express";
import cors from "cors";
import mongoose from "mongoose";
import xpenseRecordRouter from "./routes/xpense-routes";
import * as dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

//middlewares
app.use(express.json());
app.use(cors());

const URI = process.env.MONGODB_URI;

if(!URI){
    throw new Error("The MONGODB_URI environment variable is not set.");
}

mongoose
.connect(URI)
.then(() => console.log("MongoDB is connected"))
.catch((err) => console.log("Not connected to MongoDB: ", err));

app.use("/xpense-xplorer", xpenseRecordRouter);

//Port is listening at 3001 or env
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
