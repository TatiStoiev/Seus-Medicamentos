import chai, { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import sinonChai from 'sinon-chai';
import { mockMedicamento, mockMedicamentoCriado } from '../mocks/validationsMocks';
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
});