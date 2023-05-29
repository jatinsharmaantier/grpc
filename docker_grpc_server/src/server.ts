import path from 'path'
import * as grpc from '@grpc/grpc-js'

import { Server as HTTPServer, createServer } from "http";
import express, { NextFunction, Request, Response } from "express";
import { ServerInterface } from "./interfaces/server.interface";

import cors from "cors";
import * as dotenv from 'dotenv'
dotenv.config();

import appRouter from './modules/app/appRoute'
import app_controller from "./modules/app/controllers/appcontroller";

const PORT = 8188

import randomPackage from './protoPackages/get_all_package'
import get_all from './protoServices/get_all_services'

import insertPackage from './protoPackages/insert_package'
import insert_customer from './protoServices/insert_services'

class Server implements ServerInterface {

    public app: express.Application;
    public httpServer: HTTPServer;

    constructor() {

        this.app = express();
        this.httpServer = createServer(this.app);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());

        this.startServer();

    }

    public startServer() {

        this.httpServer.listen(`8188`, () => {
            console.log(`HTTP  at  port   `);
        });

        this.app.get("/", (req: Request, res: Response) => {
            console.log(`hit api here    `);
            res.send(`InfoMessages.APP_INFO`);
        });

        this.app.use('/api/v1', appRouter);

        main();

    }

}

new Server();

function main() {

    const server = getServer()

    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            if (err) {
                console.error(`error in bind `, err)
                return
            }
            console.log(`Your server as started on port ${port}`)
            server.start()
        });

}

function getServer() {

    const server = new grpc.Server()

    server.addService(randomPackage.Random.service, {
        getAll: get_all.getAll
    })

    server.addService(insertPackage.Insert.service, {
        insert: insert_customer.insert
    })

    return server
}

