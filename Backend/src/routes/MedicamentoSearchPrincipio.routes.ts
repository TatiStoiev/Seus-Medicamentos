import { Request, Response, Router } from "express";
import MedicamentoController from "../controllers/Medicamento.controller";
import Validations from "../middlewares/Validations";

const medicamentoController = new MedicamentoController();

const medicamentoPrincipioRouter = Router();

medicamentoPrincipioRouter.get(
    '/',
    Validations.validateSearchByPrincipioAtivo, 
    (req: Request, res: Response) => medicamentoController.findMedicamentoByPrincipioAtivo(req, res),
)

export default medicamentoPrincipioRouter; 