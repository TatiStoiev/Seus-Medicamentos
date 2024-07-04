import { IMedicamento } from "./IMedicamento";

export interface IMedicamentoModel {
    create(data: Partial<IMedicamento>): Promise<IMedicamento>
}