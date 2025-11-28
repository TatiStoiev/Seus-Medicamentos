import { Request, Response } from 'express';
import MedicineService from '../services/Medicine.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MedicineController {
    private medicineService = new MedicineService();

    constructor(medicineService = new MedicineService()) {
    this.medicineService = medicineService;
  }

    public async createMedicine(req: Request, res: Response): Promise<Response> {
        const medicineCreated = await this.medicineService.createMedicine(req.body);
        return res
            .status(mapStatusHTTP(medicineCreated.status))
            .json(medicineCreated.data);
    }

    public async findMedicineByName(req: Request, res: Response): Promise<Response> {
        const { name } = req.query as { name: string };
        const nameToLower = name.toLowerCase();

        const medicine = await this.medicineService.findMedicineByName(nameToLower);
        return res 
            .status(mapStatusHTTP(medicine.status))
            .json(medicine.data);
    }

    public async findMedicineByActivePrinciple(req: Request, res: Response): Promise<Response> {
        const { activePrinciple } = req.query as { activePrinciple: string };
        const activePrincipleToLower = activePrinciple.toLowerCase();

        const medicine = await this.medicineService
            .findMedicineByActivePrinciple(activePrincipleToLower);
        return res
            .status(mapStatusHTTP(medicine.status))
            .json(medicine.data);
    }
}