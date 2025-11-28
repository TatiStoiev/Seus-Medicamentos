import { medicineFound, NewEntity } from '../interfaces';
import MedicineModel from '../models/MedicineModel';
import { IMedicine } from '../interfaces/IMedicine';
import { IMedicineModel } from '../interfaces/IMedicineModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';

export default class MedicineService {
    private medicineModel: IMedicineModel;

    constructor(medicineModel: IMedicineModel = new MedicineModel()) {
    this.medicineModel = medicineModel;
  }

    public async createMedicine(medicine: NewEntity<IMedicine>): 
      Promise<ServiceResponse<medicineFound>> {
        const newMedicine = await this.medicineModel.create(medicine);
        return { status: 'CREATED', data: newMedicine };
    }

    public async findMedicineByName(medicineName: string): 
      Promise<ServiceResponse<medicineFound>> {
        const medicine = await this.medicineModel.findByName(medicineName);
        if (medicine === null) {
            return { status: 'NOT_FOUND', data: { message: 'Medicine not found' } };
        }

        return { status: 'SUCCESSFUL', data: medicine };
    }

    public async findMedicineByActivePrinciple(activePrincipleName: string): 
      Promise<ServiceResponse<medicineFound>> {
        const medicine = await this.medicineModel.findByActivePrinciple(activePrincipleName);
        if (medicine === null) {
            return { status: 'NOT_FOUND', data: { message: 'Medicine not found' } };
        }

        return { status: 'SUCCESSFUL', data: medicine };
    }
}