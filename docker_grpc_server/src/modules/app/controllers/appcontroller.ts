import express, { NextFunction, Request, Response } from "express";
import * as dotenv from 'dotenv'
dotenv.config();
//import mailgun_class from "../../../helpers/mailgun";

// import client from "../../../protoServices/client";
// import insert_client from "../../../protoServices/insert";

class appController {

    async insert(req: any, res: any) {
        try {
            console.log(`   iuhkuhkuhuhuhuhukhkuhu`);

            // let newCustomer = {
            //     name: req.body.name,
            //     age: req.body.age,
            //     address: req.body.address
            // };

            // insert_client.insert(newCustomer, (err: any, data: any) => {
            //     if (err) {
            //         console.log(`err  =-=-  `, err);

            //         return res.status(500).send({ message: `something went wrong` })
            //     }
            //     console.log("Customer created successfully", data);
            //     return res.status(200).send({ message: `Customer created successfully`, data: data });
            // });

        } catch (error) {
            console.log(`error catch  =-=-  `, error);
            return res.status(500).send({ message: `something went wrong` })
        }
    };

    async getgrpcdata(req: any, res: any) {
        try {
            console.log(`hit hewre `);
            // client.getAll(null, (err: any, data: any) => {
            //     console.log(`data -=-=- `, data, `err  `, err);

            //     if (!err) {
            //         return res.status(200).send({ data: data.customers });
            //     } else {
            //         return res.status(500).send({ message: `something went wrong` })
            //     }
            // });
        } catch (error) {
            console.log(`error catch getall  `, error);
            return res.status(500).send({ message: `something went wrong` })
        }
    };

    async sendMail(req: any, res: any) {
        try {
            console.log(` sendMail req.body  `, req.body);

            // let { from_title, subject, content, to_email } = req.body

            // if (!from_title || !subject || !content || !to_email) {
            //     return res.status(400).send({ status: 0, message: `Please provide proper parameters` })
            // }

            // let result: any = await mailgun_class.send_node_mailgun(req.body);

            // if (result) {
            //     return res.status(200).send({ status: 1, "message": 'Mail send' });
            // } else {
            //     return res.status(400).send({ status: 0, "message": 'Issue in Sending Mail' });
            // }

        } catch (error) {
            console.log(` sendMail error catch `, error);
            return res.status(500).send({ status: false, message: "Something went wrong." });
        }
    }

}

let app_controller = new appController();
export default app_controller;