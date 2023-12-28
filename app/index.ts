import express = require("express");
import {Request, Response, Express} from 'express'
const server:Express = express();

server.get("/", (req:Request, res:Response) => {
    return res.send("Hello!");
});

server.listen(8001,() => {
    console.log("\nhttp://localhost:8001/")
});
