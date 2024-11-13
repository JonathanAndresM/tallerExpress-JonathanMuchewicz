import express from "express";
import "dotenv/config.js";
import "./config/db.js"
import cors from "cors"
import morgan from "morgan";
import indexRouter from "./router/index.js"
import error_handler from "./middlewares/error_handler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";

const server = express()

const PORT = process.env.PORT

const ready = () => console.log("server ready in port: " + PORT);

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(cors())
server.use(morgan("dev"))
server.use("/api", indexRouter)
server.use(error_handler)
server.use(notFoundHandler)

server.listen(PORT, ready)