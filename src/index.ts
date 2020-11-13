import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes/index";
createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes

    // setup express app here
    // ...

    app.use('/api', routes);

    // start express server
    app.listen(3000);

    // insert new users for test

    console.log("Running on port 3000");

}).catch(error => console.log(error));
