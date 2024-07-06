import { Router } from "express";
import medicamentoRouter from "./Medicamento.routes";

const router = Router();

router.use('/medicamentos', medicamentoRouter);

export default router; 