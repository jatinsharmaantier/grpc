import app_controller from "./controllers/appcontroller";
import * as express from "express";

export = (() => {

    let router = express.Router();

    router.post('/send/mail', app_controller.sendMail);
    router.get('/all', app_controller.getgrpcdata);

    router.post('/insert', app_controller.insert);

    return router;

})();