import { Request, Response } from "express";
import MedicamentoService from "../services/Medicamento.service";
import mapStatusHTTP from "../utils/mapStatusHTTP";


export default class MedicamentoController {
    constructor(
        private medicamentoService = new MedicamentoService(),
    ) {}

    public async createMedicamento(req: Request, res: Response) {
        const medicamentoCreated = await this.medicamentoService.createMedicamento(req.body);
        res.status(mapStatusHTTP(medicamentoCreated.status)).json(medicamentoCreated.data);
    }

    public async findMedicamentoByName(req: Request, res: Response) {
        const { nome } = req.query as { nome: string };
        const medicamento = await this.medicamentoService.findMedicamentoByName(nome.toLowerCase());
        res.status(mapStatusHTTP(medicamento.status)).json(medicamento.data);
    }

    public async findMedicamentoByPrincipioAtivo(req: Request, res: Response) {
        const { principioAtivo } = req.query as { principioAtivo: string };
        const medicamento = await this.medicamentoService.findMedicamentoByPrincipioAtivo(principioAtivo.toLocaleLowerCase());
        res.status(mapStatusHTTP(medicamento.status)).json(medicamento.data);
    }
}