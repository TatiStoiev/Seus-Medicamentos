import chai, { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import sinonChai from 'sinon-chai';
import { mockMedicineCreated, mockMedicineCreatedWithoutId, mockMedicineFindByNameWithId, mockMedicineFound } from '../mocks/validationsMocks';
import MedicineModel from '../../models/MedicineModel';
import SequelizeMedicine from '../../database/models/SequelizeMedicine';

chai.use(sinonChai);

describe('Tests for the model layer', () => {
    afterEach(() => {
        sinon.restore();
    });

    describe('Tests for create a new medicine', function () {
        it('Should create a new medicine successfully', async () => {
            sinon.stub(SequelizeMedicine, 'create').resolves(mockMedicineCreated as any);
    
            const medicineModel = new MedicineModel();
            const newMedicamento = await medicineModel.create(mockMedicineCreatedWithoutId);
   
            expect(newMedicamento).to.be.deep.equal(mockMedicineCreatedWithoutId);
        });
    });

    describe('Tests for search the medicine by name', function () {
        it('Should find a medicine by name successfully', async () => {
            sinon.stub(SequelizeMedicine, 'findOne').resolves(mockMedicineFindByNameWithId as any);
    
            const name = 'XXX';

            const medicineModel = new MedicineModel();
            const MedicineFound = await medicineModel.findByName(name);
   
            expect(MedicineFound).to.be.deep.equal(mockMedicineFound);
        });
    });

    describe('Tests for search the medicine by active principle', function () {
        it('Should find the medicine by active principle successfully', async () => {
            sinon.stub(SequelizeMedicine, 'findOne').resolves(mockMedicineFindByNameWithId as any);
    
            const activePrinciple = 'X';

            const medicineModel = new MedicineModel();
            const MedicineFound = await medicineModel.findByActivePrinciple(activePrinciple);
   
            expect(MedicineFound).to.be.deep.equal(mockMedicineFound);
        });
    });
});