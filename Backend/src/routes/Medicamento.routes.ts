import { Request, Response, Router } from "express";
import MedicamentoController from "../controllers/Medicamento.controller";
import Validations from "../middlewares/Validations";

const medicamentoController = new MedicamentoController();

const medicamentoRouter = Router();

medicamentoRouter.post(
    '/',
    Validations.validateMedicamento, 
    (req: Request, res: Response) => medicamentoController.createMedicamento(req, res),
); 

export default medicamentoRouter; 