import chai, { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import sinonChai from 'sinon-chai';
import { mockMedicamento, mockMedicamentoCriado, mockMedicamentoNome } from '../mocks/validationsMocks';
import MedicamentoModel from '../../models/MedicamentoModel';
import SequelizeMedicamento from '../../database/models/SequelizeMedicamento';

chai.use(sinonChai);

describe('Testes da camada model', () => {

    afterEach(function () {
        sinon.restore();
    });

    describe('Teste para a create', async function () {

        it('Deve criar o medicamento com sucesso', async function () {
            sinon.stub(SequelizeMedicamento, 'create').resolves(mockMedicamentoCriado as any);
    
            const medicamentoModel = new MedicamentoModel();
            const newMedicamento = await medicamentoModel.create(mockMedicamento);
   
            expect(newMedicamento).to.be.deep.equal(mockMedicamentoCriado);
        })
    })

    describe('Teste para encontrar um medicamento por nome', async function () {

        it('Deve encontrar o medicamento com sucesso', async function () {
            sinon.stub(SequelizeMedicamento, 'findOne').resolves(mockMedicamentoNome as any);
    
            const name = 'XXX'

            const medicamentoModel = new MedicamentoModel();
            const MedicamentoFound = await medicamentoModel.findByName(name);
   
            expect(MedicamentoFound).to.be.deep.equal(mockMedicamentoNome);
        })
    })

    describe('Teste para encontrar um medicamento por princípio ativo', async function () {

        it('Deve encontrar o medicamento com sucesso', async function () {
            sinon.stub(SequelizeMedicamento, 'findOne').resolves(mockMedicamentoNome as any);
    
            const principioAtivo = 'X'

            const medicamentoModel = new MedicamentoModel();
            const MedicamentoFound = await medicamentoModel.findByPrincipioAtivo(principioAtivo);
   
            expect(MedicamentoFound).to.be.deep.equal(mockMedicamentoNome);
        })
    })
});