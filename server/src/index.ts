/* 
Morgan: Logs HTTP requests and is helpful for monitoring and debugging web applications.
Helmet: Adds security-related HTTP headers to protect your web application from common vulnerabilities.
rimraf : Removes files and directories, including non-empty directories, in a cross-platform way. like rm -rf
concurrently: Run multiple commands concurrently in same command line.
*/
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import dashboardRouter from "./routes/dashboardRoutes";
import productRouter from "./routes/productRouter";
import userRouter from "./routes/userRouter"
import expensesRouter from "./routes/expenseRouter";
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

const port = Number(process.env.PORT) || 3001;
app.use("/dashboard",dashboardRouter);
app.use("/products",productRouter);
app.use("/expenses",expensesRouter);
app.use("/users",userRouter);
app.get("/hello",(req,res)=>{
    res.send("Hello World2");
})
app.listen(port,"0.0.0.0",()=>{
    console.log(`Server is running on port ${port}`)
})
