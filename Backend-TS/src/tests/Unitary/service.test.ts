import chai, { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import sinonChai from 'sinon-chai';
import { mockMedicineCreated, mockMedicineCreatedWithoutId, mockMedicineFindByNameWithId, mockMedicineFound } from '../mocks/validationsMocks';
import MedicineService from '../../services/Medicine.service';
import SequelizeMedicine from '../../database/models/SequelizeMedicine';

chai.use(sinonChai);

describe('Tests for the service layer', () => {
    afterEach(() => {
        sinon.restore();
    });

    describe('Tests for create medicine', async () => {
        it('Should create a medicine successfully', async () => {
            sinon.stub(SequelizeMedicine, 'create').resolves(mockMedicineCreated as any);
    
            const medicineService = new MedicineService();
            const newMedicine = await medicineService.createMedicine(mockMedicineCreatedWithoutId);
    
            expect(newMedicine.status).to.be.equal('CREATED');
            expect(newMedicine.data).to.be.deep.equal(mockMedicineCreatedWithoutId);
        });
    });

    describe('Tests for search medicine by name', async () => {
        it('Should find the medicine by name successfully', async () => {
            sinon.stub(SequelizeMedicine, 'findOne').resolves(mockMedicineFindByNameWithId as any);
    
            const name = 'XXX';
            const medicineService = new MedicineService();
            const newMedicine = await medicineService.findMedicineByName(name);
    
            expect(newMedicine.status).to.be.equal('SUCCESSFUL');
            expect(newMedicine.data).to.be.deep.equal(mockMedicineFound);
        });
    });

    describe('Tests for search medicine by active principle', async () => {
        it('Should find the medicine by active principle successfully', async () => {
            sinon.stub(SequelizeMedicine, 'findOne').resolves(mockMedicineFindByNameWithId as any);
    
            const activePrinciple = 'X';
            const medicineService = new MedicineService();
            const newMedicine = await medicineService.findMedicineByActivePrinciple(activePrinciple);
    
            expect(newMedicine.status).to.be.equal('SUCCESSFUL');
            expect(newMedicine.data).to.be.deep.equal(mockMedicineFound);
        });
    });
});