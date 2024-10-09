import { Request, Response } from "express";
import MedicineService from "../services/Medicine.service";
import mapStatusHTTP from "../utils/mapStatusHTTP";


export default class MedicineController {
    constructor(
        private medicineService = new MedicineService(),
    ) {}

    public async createMedicine(req: Request, res: Response) {
        const medicineCreated = await this.medicineService.createMedicine(req.body);
        res.status(mapStatusHTTP(medicineCreated.status)).json(medicineCreated.data);
    }

    public async findMedicineByName(req: Request, res: Response) {
        const { name } = req.query as { name: string };
        const nameToLower = name.toLowerCase();

        const medicine = await this.medicineService.findMedicineByName(nameToLower);
        res.status(mapStatusHTTP(medicine.status)).json(medicine.data);
    }

    public async findMedicineByActivePrinciple(req: Request, res: Response) {
        const { activePrinciple } = req.query as { activePrinciple: string };
        const activePrincipleToLower = activePrinciple.toLowerCase();

        const medicine = await this.medicineService.findMedicineByActivePrinciple(activePrincipleToLower);
        res.status(mapStatusHTTP(medicine.status)).json(medicine.data);
    }
}