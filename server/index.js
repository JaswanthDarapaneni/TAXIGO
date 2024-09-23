import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/DB.js'; // Ensure this path is correct

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true,
}));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    connectDB();
    console.log("Server is running on port 3000");
}).on("error", (err) => {
    console.log(err);
});
