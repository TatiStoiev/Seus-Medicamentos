import { NewEntity } from "../interfaces";
import MedicamentoModel from "../models/MedicamentoModel";
import { IMedicamento } from "../interfaces/IMedicamento";
import { IMedicamentoModel } from "../interfaces/IMedicamentoModel";
import { ServiceResponse } from "../interfaces/ServiceResponse";

export default class MedicamentoService {
    constructor(
        private medicamentoModel: IMedicamentoModel = new MedicamentoModel(),
    ) {}

    public async createMedicamento(medicamento: NewEntity<IMedicamento>): Promise<ServiceResponse<IMedicamento>> {
        const newMedicamento = await this.medicamentoModel.create(medicamento);
        return { status: 'CREATED', data: newMedicamento };
    }
}