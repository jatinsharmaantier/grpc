"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var grpc = __importStar(require("@grpc/grpc-js"));
var http_1 = require("http");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var appRoute_1 = __importDefault(require("./modules/app/appRoute"));
var PORT = 8188;
var get_all_package_1 = __importDefault(require("./protoPackages/get_all_package"));
var get_all_services_1 = __importDefault(require("./protoServices/get_all_services"));
var insert_package_1 = __importDefault(require("./protoPackages/insert_package"));
var insert_services_1 = __importDefault(require("./protoServices/insert_services"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.httpServer = (0, http_1.createServer)(this.app);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)());
        this.startServer();
    }
    Server.prototype.startServer = function () {
        this.httpServer.listen("8081  ", function () {
            console.log("HTTP   at  port  ");
        });
        // const server = getServer()
        // server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
        //     (err, port) => {
        //         if (err) {
        //             console.error(`error in bind `, err)
        //             return
        //         }
        //         console.log(`Your server as started on port ${port}`)
        //         server.start()
        //     });
        // this.app.get("/", (req: Request, res: Response) => {
        //     console.log(`hit api here    `);
        //     res.send(`InfoMessages.APP_INFO`);
        // });
        // this.app.use('/api/v1', appRouter);
        main();
        this.app.get("/", function (req, res) {
            console.log("hit api here    ");
            res.send("InfoMessages.APP_INFO");
        });
        this.app.use('/api/v1', appRoute_1.default);
    };
    return Server;
}());
new Server();
function main() {
    var server = getServer();
    server.bindAsync("127.0.0.1:50051", grpc.ServerCredentials.createInsecure(), function (err, port) {
        if (err) {
            console.error("error in bind ", err);
            return;
        }
        console.log("Your server as started on port ".concat(port));
        server.start();
    });
}
function getServer() {
    var server = new grpc.Server();
    server.addService(get_all_package_1.default.Random.service, {
        getAll: get_all_services_1.default.getAll
    });
    server.addService(insert_package_1.default.Insert.service, {
        insert: insert_services_1.default.insert
    });
    return server;
}
//# sourceMappingURL=server.js.map