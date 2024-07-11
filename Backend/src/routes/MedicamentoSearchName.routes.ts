import { Request, Response, Router } from "express";
import MedicamentoController from "../controllers/Medicamento.controller";
import Validations from "../middlewares/Validations";

const medicamentoController = new MedicamentoController();

const medicamentoNameRouter = Router();

medicamentoNameRouter.get(
    '/',
    Validations.validateSearchByName, 
    (req: Request, res: Response) => medicamentoController.findMedicamentoByName(req, res),
)

export default medicamentoNameRouter; 