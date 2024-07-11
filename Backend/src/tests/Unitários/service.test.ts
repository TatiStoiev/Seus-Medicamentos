import chai, { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import sinonChai from 'sinon-chai';
import { mockMedicamento, mockMedicamentoCriado, mockMedicamentoNome } from '../mocks/validationsMocks';
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

    describe('Teste para a findMedicamentoByName', async function () {

        it('Deve encontrar o medicamento com sucesso', async function () {
            sinon.stub(SequelizeMedicamento, 'findOne').resolves(mockMedicamentoNome as any);
    
            const nome = 'XXX'
            const medicamentoService = new MedicamentoService();
            const newMedicamento = await medicamentoService.findMedicamentoByName(nome);
    
            expect(newMedicamento.status).to.be.equal('SUCCESSFUL');
            expect(newMedicamento.data).to.be.deep.equal(mockMedicamentoNome);
        })
    })

    describe('Teste para a findMedicamentoByPrincipioAtivo', async function () {

        it('Deve encontrar o medicamento com sucesso', async function () {
            sinon.stub(SequelizeMedicamento, 'findOne').resolves(mockMedicamentoNome as any);
    
            const principioAtivo = 'X'
            const medicamentoService = new MedicamentoService();
            const newMedicamento = await medicamentoService.findMedicamentoByPrincipioAtivo(principioAtivo);
    
            expect(newMedicamento.status).to.be.equal('SUCCESSFUL');
            expect(newMedicamento.data).to.be.deep.equal(mockMedicamentoNome);
        })
    })
});