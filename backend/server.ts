import express from "express";
import cors from "cors";
import ErrorHandler from "./MiddleWare/route-not-found";
import config from "./Utils/Config";
import meetingRouter from "./Routes/meetingRouter";

const server = express();

server.use(cors());
server.use(express.json());
// server.use(express.static("upload"));
// server.use(fileUpload({createParentPath: true}))

server.use("/api/v1/meetings",meetingRouter);
server.use("*",ErrorHandler)

server.listen(config.webPort, ()=>{
    console.log(`listing on http://localhost:${config.webPort}/api/v1/meetings`)
})