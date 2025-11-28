import SequelizeMedicine from '../database/models/SequelizeMedicine';
import { IMedicine } from '../interfaces/IMedicine';
import { IMedicineModel } from '../interfaces/IMedicineModel';
import { NewEntity, medicineFound } from '../interfaces';

export default class MedicineModel implements IMedicineModel {
    private model = SequelizeMedicine;

    async create(data: NewEntity<IMedicine>): Promise<medicineFound> {
        const medicineCreated = await this.model.create(data);

        const { 
            id, name, activePrinciple, composition, presentation, use, drugInteractions, 
        } = medicineCreated;

        const resultMedicineCreated = { 
            name, activePrinciple, composition, presentation, use, drugInteractions };

        return resultMedicineCreated;
    }

    async findByName(medicineName: string): Promise<medicineFound | null> {
        const medicineFoundByName = await this.model.findOne({ where: { name: medicineName } });
        if (medicineFoundByName === null) return null; 

        const { 
            id, name, activePrinciple, composition, presentation, use, drugInteractions, 
        } = medicineFoundByName;

        const resultMedicineFoundName = { 
            name, activePrinciple, composition, presentation, use, drugInteractions };

        return resultMedicineFoundName; 
    }

    async findByActivePrinciple(activePrincipleName: string): Promise<medicineFound | null> {
        const medicineFoundByActivePrinciple = await this.model.findOne({ where: { 
            activePrinciple: activePrincipleName } });
        if (medicineFoundByActivePrinciple === null) return null; 

        const { 
            id, name, activePrinciple, composition, presentation, use, drugInteractions, 
        } = medicineFoundByActivePrinciple;

        const resultMedicineFound = { 
            name, activePrinciple, composition, presentation, use, drugInteractions };

        return resultMedicineFound;  
    }
}
