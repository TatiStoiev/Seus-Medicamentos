import { IMedicamento } from "./IMedicamento";

export interface IMedicamentoModel {
    create(data: Partial<IMedicamento>): Promise<IMedicamento>, 
    findByName(nome: string): Promise<IMedicamento | null>,
    findByPrincipioAtivo(principioAtivo: string): Promise<IMedicamento | null>
}