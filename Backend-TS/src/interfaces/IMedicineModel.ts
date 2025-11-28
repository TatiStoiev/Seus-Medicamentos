import { IMedicine } from './IMedicine';
import { medicineFound } from './index';

export interface IMedicineModel {
    create(data: Partial<IMedicine>): Promise<medicineFound>; 
    findByName(name: string): Promise<medicineFound | null>;
    findByActivePrinciple(activePrinciple: string): Promise<medicineFound | null>;
}