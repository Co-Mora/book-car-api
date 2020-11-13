import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import * as bcrypt from "bcryptjs";
import { User } from "../entity/User";
import { Tag } from "../entity/Tag";
const jwt = require('express-jwt');
const config = require('config.json');


export class UserController {


    static register = async (req: Request, res: Response, next: NextFunction) => {
        const userRepository = getRepository(User);
        const tagRepository = getRepository(Tag);

        const { username, email, password, firstName, lastName, role, tag } = req.body;

        try {

            const findUser = await userRepository.findOne({
                where: { email: req.body.email }
            });

            if (findUser) return res.status(200).send({ err: 12, message: "user registered already" });

            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(password, salt);

            const tagUser = await tagRepository.save(tag);
            const user = await userRepository.save({
                username,
                firstName,
                lastName,
                email,
                role,
                password: hashed,
                tag: tagUser
            });

            await userRepository.save(user);

            return res.status(201).send({ message: "User registerd" });

        } catch (e) {
            console.error(e);
        }
    }

    static login = async (req: Request, res: Response, next: NextFunction) => {
        const userRepository = getRepository(User);
        const { email } = req.body;

        try {
            const user = await userRepository.findOne({ where: { email } });

            if (!user) return res.status(404).send({ message: 'Not Foumd' });

            const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);

            return res.status(200).send({ token })

        } catch (e) {
            console.error(e);
        }

    }
}