import SequelizeMedicine from '../database/models/SequelizeMedicine';
import { IMedicine } from '../interfaces/IMedicine';
import { IMedicineModel } from '../interfaces/IMedicineModel';
import { NewEntity, medicineFound } from '../interfaces';

export default class MedicineModel implements IMedicineModel {
    private model = SequelizeMedicine;

    async create(data: NewEntity<IMedicine>): Promise<medicineFound> {
        const medicineCreated = await this.model.create(data);

        const { id, name, activePrinciple, composition, presentation, use, drugInteractions } = medicineCreated;

        const resultMedicineCreated = { name, activePrinciple, composition, presentation, use, drugInteractions };

        return resultMedicineCreated;
    }

    async findByName(medicineName: string): Promise<medicineFound | null> {
        const medicineFound = await this.model.findOne({ where: { name: medicineName } });
        if (medicineFound === null) return null; 

        const { id, name, activePrinciple, composition, presentation, use, drugInteractions } = medicineFound;

        const resultMedicineFound = { name, activePrinciple, composition, presentation, use, drugInteractions };

        return resultMedicineFound; 
    }

    async findByActivePrinciple(activePrincipleName: string): Promise<medicineFound | null> {
        const medicineFound = await this.model.findOne({ where: { activePrinciple: activePrincipleName } });
        if (medicineFound === null) return null; 

        const { id, name, activePrinciple, composition, presentation, use, drugInteractions } = medicineFound;

        const resultMedicineFound = { name, activePrinciple, composition, presentation, use, drugInteractions };

        return resultMedicineFound;  
    }
}
