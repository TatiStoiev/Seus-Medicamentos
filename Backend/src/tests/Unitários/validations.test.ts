import chai, { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import sinonChai from 'sinon-chai';
import { medicamentoSemChaveUso, mockMedicamentoSemConteudo } from '../mocks/validationsMocks';
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

    describe('Testes de validações para criação de medicamento', function() {

        it('Deve retornar status 400 e uma mensagem de erro se alguma chave para a criação de um medicamento esteja faltando', async function () {

            req.body = medicamentoSemChaveUso;
            
            Validations.validateMedicamento(req as Request, res as Response, next);
    
            expect(res.status).to.have.been.calledWith(400);
            expect(res.json).to.have.been.calledWith({ message: "O campo uso é necessário"})
        })
        
        it("Deve retornar status 400 e uma mensagem de erro se alguma das chaves estiver vazia", function() {
    
            req.body = mockMedicamentoSemConteudo;
    
            Validations.validateMedicamento(req as Request, res as Response, next);
    
            expect(res.status).to.have.been.calledWith(400);
            expect(res.json).to.have.been.calledWith({ message: "O campo nome não pode estar vazio"})
        })
    })

    describe('Testes de validações para a busca por medicamento por nome', function() {

        it('Deve retornar status 400 e uma mensagem de erro ao tentar buscar um medicamento sem o campo nome', function() {

            const req: Partial<Request> = {
                query: { nome: '' }
            }

            Validations.validateSearchByName(req as Request, res as Response, next);

            expect(res.status).to.have.been.calledWith(400);
            expect(res.json).to.have.been.calledWith({ message: 'O campo nome deve estar preenchido'})
        })
    })

    describe('Testes de validações para a busca por medicamento por principio Ativo', function() {

        it('Deve retornar status 400 e uma mensagem de erro ao tentar buscar um medicamento sem o campo principioAtivo', function() {

            const req: Partial<Request> = {
                query: { principioAtivo: '' }
            }

            Validations.validateSearchByPrincipioAtivo(req as Request, res as Response, next);

            expect(res.status).to.have.been.calledWith(400);
            expect(res.json).to.have.been.calledWith({ message: 'O campo principioAtivo deve estar preenchido'})
        })
    })
})

