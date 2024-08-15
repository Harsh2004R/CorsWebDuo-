import express from "express";
import dotenv from 'dotenv';
import cors from "cors"
import connection from "./db.js"
import OwnerRouter from "./routes/Owner.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Entery point...")
})
app.use("/admin",OwnerRouter)

const PORT = process.env.PORT
app.listen(PORT, async () => {
    try {
        console.log(`server is live at port :-${PORT}`)
        await connection;
        console.log("connected to mongoDB")
    } catch (error) {
        console.log(`somthing went wrong with mongo connection -------------------------------------${error}`)
    }
})