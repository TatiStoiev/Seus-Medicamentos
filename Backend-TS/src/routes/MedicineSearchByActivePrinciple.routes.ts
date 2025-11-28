import { Request, Response, Router } from 'express';
import MedicineController from '../controllers/Medicine.controller';
import Validations from '../middlewares/Validations';

const medicineController = new MedicineController();

const medicineActivePrincipleRouter = Router();

medicineActivePrincipleRouter.get(
    '/',
    Validations.validateSearchByActivePrinciple, 
    (req: Request, res: Response) => medicineController.findMedicineByActivePrinciple(req, res),
);

export default medicineActivePrincipleRouter; 