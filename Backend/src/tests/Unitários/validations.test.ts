import chai, { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import sinonChai from 'sinon-chai';
import { medicamentoSemChaveUso, mockMedicamento } from '../mocks/validationsMocks';
import Validations from '../../middlewares/Validations';
import { Request, Response, NextFunction } from 'express';

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

    it('Deve aparecer uma mensagem de erro se alguma chave para a criação de um medicamento esteja faltando', async function () {

        req.body = medicamentoSemChaveUso
        
        Validations.validateMedicamento(req as Request, res as Response, next);

        expect(res.status).to.have.been.calledWith(400);
        expect(res.json).to.have.been.calledWith({ message: "O campo uso é necessário"})
    } )
})

