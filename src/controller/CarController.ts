import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Car } from "../entity/Car";

export class CarController {


    static viewAll = async (req: Request, res: Response, next: NextFunction) => {
        const carRepository = getRepository(Car);
        return carRepository.find();
    }

    static viewByID = async (req: Request, res: Response, next: NextFunction) => {
        const carRepository = getRepository(Car);
        return carRepository.findOne({ where: { id: req.params.id } });
    }

    static createCar = async (req: Request, res: Response, next: NextFunction) => {
        const carRepository = getRepository(Car);
        return carRepository.save(req.body);
    }

    static remove = async (req: Request, res: Response, next: NextFunction) => {
        const carRepository = getRepository(Car);
        let carToRemove = await carRepository.findOne(req.params.id);
        await carRepository.remove(carToRemove);
    }

}