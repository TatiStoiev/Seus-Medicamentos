import chai, { expect } from 'chai';
import sinon, { SinonSpy } from 'sinon';
import sinonChai from 'sinon-chai'; 
import { mockMedicineCompleted, mockMedicineCreated, mockMedicineCreatedWithoutId, mockMedicineFound, resultFindByActivePrinciple, resultFindByName } from '../mocks/validationsMocks';
import { Request, Response } from 'express';
import MedicineService from '../../services/Medicine.service';
import MedicineController from '../../controllers/Medicine.controller';
import mapStatusHTTP from '../../utils/mapStatusHTTP';
import SequelizeMedicine from '../../database/models/SequelizeMedicine';

chai.use(sinonChai);

describe('Tests for the controller layer', () => {

    let req: Partial<Request>;
    let res: Partial<Response>;
    let mapStatusHTTPStub: SinonSpy<[string], number>;

    beforeEach(() => {
        req = {
            body: {}
        }; 
        res = {
            status: sinon.stub().returnsThis(), 
            json: sinon.stub()
        }
        mapStatusHTTPStub = sinon.spy(mapStatusHTTP) as SinonSpy<[string], number>;
    });

    afterEach(function () {
        sinon.restore();        
    });

    describe('Tests for create a new medicine', async function () {

       
        it('Should create a new medicine successfully and return status status 201 and informations about the created medicine whithout id', async function () {
            sinon.stub(SequelizeMedicine, 'create').resolves(mockMedicineCreated as any);

            const medicineService = new MedicineService();
            sinon.stub(medicineService, 'createMedicine').resolves({ status: 'CREATED', data: mockMedicineCreatedWithoutId});

            const medicineController = new MedicineController(medicineService);

            mapStatusHTTPStub.returned(201)

            req.body = mockMedicineCompleted
            await medicineController.createMedicine(req as Request, res as Response);
             
    
            expect(res.status).to.be.calledWith(201);
            expect(res.json).to.have.been.calledWith(mockMedicineCreatedWithoutId);
        })
    })


    describe('Tests for search medicine by name', async function () {

        it('Should find medicine by name successfully, return status 200 and information about the medicine without id', async function () {

            const medicineService = new MedicineService();
            sinon.stub(medicineService, 'findMedicineByName').resolves(resultFindByName as any)

            const medicineController = new MedicineController(medicineService);

            mapStatusHTTPStub.returned(200)

            req = {
                query: {
                    name: 'XXX'
                }
            } as unknown as Request;

            await medicineController.findMedicineByName(req as Request, res as Response);
             
    
            expect(res.status).to.have.been.calledWith(200);
            expect(res.json).to.have.been.calledWith(mockMedicineFound);
        })
    })

    describe('Tests for search medicine by active principle', async function () {

        it('Should find medicine by active principle successfully, return status 200 and information about the medicine without id', async function () {

            const medicineService = new MedicineService();
            sinon.stub(medicineService, 'findMedicineByActivePrinciple').resolves(resultFindByActivePrinciple as any)

            const medicineController = new MedicineController(medicineService);

            mapStatusHTTPStub.returned(200)

            req = {
                query: {
                    activePrinciple: 'X'
                }
            } as unknown as Request;

            await medicineController.findMedicineByActivePrinciple(req as Request, res as Response);
             
    
            expect(res.status).to.have.been.calledWith(200);
            expect(res.json).to.have.been.calledWith(mockMedicineFound);
        })
    })
});