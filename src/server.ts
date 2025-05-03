import jsonServer from "json-server";
import { Application } from "express";
import cors from "cors"

const server: Application = jsonServer.create();
const router = jsonServer.router("./db.json");
const middleware = jsonServer.defaults();
const port: number = Number(process.env.PORT) || 4000;

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
server.use(cors(corsOptions));
server.use(middleware);
server.use(router);



server.listen(port, () => {
    console.log(`JSON server is running on port ${port}`);
});
