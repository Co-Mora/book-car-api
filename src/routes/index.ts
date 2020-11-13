
import { Router } from "express";
import { CarController } from "../controller/CarController";
import { UserController } from "../controller/UserController";
import auth from "../middleware/auth";
const router = Router();


router.post('/user/register', UserController.register);
router.post('/user/login', UserController.login);

router.post('/car/create', auth, CarController.createCar);
router.get('/car', auth, CarController.viewAll);
router.get('/car/:id', auth, CarController.viewByID);


export default router;