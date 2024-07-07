import chai, { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import sinonChai from 'sinon-chai';
import { mockMedicamento, mockMedicamentoCriado } from '../mocks/validationsMocks';
import { Request, Response, NextFunction } from 'express';
import MedicamentoService from '../../services/Medicamento.service';
import SequelizeMedicamento from '../../database/models/SequelizeMedicamento';

chai.use(sinonChai);

describe('Testes da camada service', () => {

    afterEach(function () {
        sinon.restore();
    });

    describe('Teste para a createMedicamento', async function () {

        it('Deve criar o medicamento com sucesso', async function () {
            sinon.stub(SequelizeMedicamento, 'create').resolves(mockMedicamentoCriado as any);
    
            const medicamentoService = new MedicamentoService();
            const newMedicamento = await medicamentoService.createMedicamento(mockMedicamento);
    
            expect(newMedicamento.status).to.be.equal('CREATED');
            expect(newMedicamento.data).to.be.deep.equal(mockMedicamentoCriado);
        })

    })
});