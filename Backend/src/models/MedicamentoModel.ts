import SequelizeMedicamento from "../database/models/SequelizeMedicamento";
import { IMedicamento } from "../interfaces/IMedicamento";
import { IMedicamentoModel } from "../interfaces/IMedicamentoModel";
import { NewEntity } from "../interfaces";

export default class MedicamentoModel implements IMedicamentoModel {
    private model = SequelizeMedicamento;

    async create(data: NewEntity<IMedicamento>): Promise<IMedicamento> {
        const medicamentoCriado = await this.model.create(data);

        const { id, nome, principioAtivo, apresentacao, uso, interacoesMedicamentosas } = medicamentoCriado;

        return { id, nome, principioAtivo, apresentacao, uso, interacoesMedicamentosas };
    }
}