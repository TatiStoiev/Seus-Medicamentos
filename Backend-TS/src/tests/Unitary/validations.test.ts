import chai, { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import { mockMedicineWithoutUseKey, mockMedicineWithoutName } from '../mocks/validationsMocks';
import Validations from '../../middlewares/Validations';

chai.use(sinonChai);

describe('Validations tests', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: SinonStub;

    beforeEach(() => {
        req = {
            body: {},
        }; 
        res = {
            status: sinon.stub().returnsThis(), 
            json: sinon.stub(),
        };
        next = sinon.stub();
    });

    afterEach(() => {
        sinon.restore();
    });

    describe('Validation tests for the creation of medicine', () => {
        it('Must return status 400 and an error message if one of the fields for creating the medicine is not filled', async () => {
            req.body = mockMedicineWithoutUseKey;
            
            Validations.validateMedicine(req as Request, res as Response, next);
    
            expect(res.status).to.have.been.calledWith(400);
            expect(res.json).to.have.been.calledWith({ message: 'The use field must be filled in' });
        });
        
        it('Should return status 400  and an error message if one of the fields for creating the medicine is empty', () => {
            req.body = mockMedicineWithoutName;
    
            Validations.validateMedicine(req as Request, res as Response, next);
    
            expect(res.status).to.have.been.calledWith(400);
            expect(res.json).to.have.been.calledWith({ message: 'The name field must be filled in' });
        });
    });

    describe('Validation tests for the search medicine by name', () => {
        it('Should return status 400 and an error message when search the medicine without the name field', () => {
            const req: Partial<Request> = {
                query: { name: '' },
            };

            Validations.validateSearchByName(req as Request, res as Response, next);

            expect(res.status).to.have.been.calledWith(400);
            expect(res.json).to.have.been.calledWith({ message: 'The name field must be filled in' });
        });
    });

    describe('Validation tests for the search medicine by active principle', () => {
        it('Should return status 400 and an error message when search the medicine without the active principle field', () => {
            const req: Partial<Request> = {
                query: { activePrinciple: '' },
            };

            Validations.validateSearchByActivePrinciple(req as Request, res as Response, next);

            expect(res.status).to.have.been.calledWith(400);
            expect(res.json).to.have.been.calledWith({ message: 'The activePrinciple field must be filled in' });
        });
    });
});
