import { Router } from "express";
import medicamentoRouter from "./Medicamento.routes";
import medicamentoNameRouter from "./MedicamentoSearchName.routes";
import medicamentoPrincipioRouter from "./MedicamentoSearchPrincipio.routes";

const router = Router();

router.use('/medicamentos', medicamentoRouter);
router.use('/medicamentos/searchNome', medicamentoNameRouter);
router.use('/medicamentos/searchPrincipioAtivo', medicamentoPrincipioRouter);

export default router; 