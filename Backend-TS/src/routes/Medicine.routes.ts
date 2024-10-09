import { Request, Response, Router } from "express";
import MedicineController from "../controllers/Medicine.controller";
import Validations from "../middlewares/Validations";

const medicineController = new MedicineController();

const medicineRouter = Router();

medicineRouter.post(
    '/',
    Validations.validateMedicine, 
    (req: Request, res: Response) => medicineController.createMedicine(req, res),
); 

export default medicineRouter; 