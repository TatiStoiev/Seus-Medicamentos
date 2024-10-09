import chai, { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import sinonChai from 'sinon-chai';
import { mockMedicineWithoutUseKey, mockMedicineWithoutName } from '../mocks/validationsMocks';
import Validations from '../../middlewares/Validations';
import { Request, Response } from 'express';

chai.use(sinonChai);

describe('Validations tests', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: SinonStub;

    beforeEach(() => {
        req = {
            body: {}
        }; 
        res = {
            status: sinon.stub().returnsThis(), 
            json: sinon.stub()
        }
        next = sinon.stub();
    })

    afterEach(function () {
        sinon.restore();
    });

    describe('Validation tests for the creation of medicine', function() {

        it('Must return status 400 and an error message if one of the fields for creating the medicine is not filled', async function () {

            req.body = mockMedicineWithoutUseKey;
            
            Validations.validateMedicine(req as Request, res as Response, next);
    
            expect(res.status).to.have.been.calledWith(400);
            expect(res.json).to.have.been.calledWith({ message: "The use field must be filled in"})
        })
        
        it("Should return status 400  and an error message if one of the fields for creating the medicine is empty", function() {
    
            req.body = mockMedicineWithoutName;
    
            Validations.validateMedicine(req as Request, res as Response, next);
    
            expect(res.status).to.have.been.calledWith(400);
            expect(res.json).to.have.been.calledWith({ message: "The name field must be filled in"})
        })
    })

    describe('Validation tests for the search medicine by name', function() {

        it('Should return status 400 and an error message when search the medicine without the name field', function() {

            const req: Partial<Request> = {
                query: { name: '' }
            }

            Validations.validateSearchByName(req as Request, res as Response, next);

            expect(res.status).to.have.been.calledWith(400);
            expect(res.json).to.have.been.calledWith({ message: 'The name field must be filled in'})
        })
    })

    describe('Validation tests for the search medicine by active principle', function() {

        it('Should return status 400 and an error message when search the medicine without the active principle field', function() {

            const req: Partial<Request> = {
                query: { activePrinciple: '' }
            }

            Validations.validateSearchByActivePrinciple(req as Request, res as Response, next);

            expect(res.status).to.have.been.calledWith(400);
            expect(res.json).to.have.been.calledWith({ message: 'The activePrinciple field must be filled in'})
        })
    })
})

