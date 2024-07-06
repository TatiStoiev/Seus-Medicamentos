import { Request, Response } from "express";
import MedicamentoService from "../services/Medicamento.service";
import mapStatusHTTP from "../utils/mapStatusHTTP";

export default class MedicamentoController {
    constructor(
        private medicamentoService = new MedicamentoService(),
    ) {}

    public async createMedicamento(req: Request, res: Response) {
        const data = req.body;
        const medicamentoCreated = await this.medicamentoService.createMedicamento(req.body);
        res.status(mapStatusHTTP(medicamentoCreated.status)).json(medicamentoCreated.data);
    }
}