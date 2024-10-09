import { Request, Response, Router } from "express";
import MedicineController from "../controllers/Medicine.controller";
import Validations from "../middlewares/Validations";

const medicineController = new MedicineController();

const medicineNameRouter = Router();

medicineNameRouter.get(
    '/',
    Validations.validateSearchByName, 
    (req: Request, res: Response) => medicineController.findMedicineByName(req, res),
)

export default medicineNameRouter; 