import chai, { expect } from 'chai';
import sinon, { SinonSpy } from 'sinon';
import sinonChai from 'sinon-chai';
import { mockMedicamento, mockMedicamentoCriado, resultFindByName, mockMedicamentoNome, resultFindByPrincipioAtivo } from '../mocks/validationsMocks';
import { Request, Response, NextFunction } from 'express';
import MedicamentoService from '../../services/Medicamento.service';
import SequelizeMedicamento from '../../database/models/SequelizeMedicamento';
import MedicamentoController from '../../controllers/Medicamento.controller';
import mapStatusHTTP from '../../utils/mapStatusHTTP';

chai.use(sinonChai);

describe('Testes da camada controller', () => {

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

    describe('Teste para a createMedicamento', async function () {

        it('Deve criar o medicamento com sucesso retornando o status 201 e as informações do medicamento criado', async function () {
            sinon.stub(SequelizeMedicamento, 'create').resolves(mockMedicamentoCriado as any);

            const medicamentoService = new MedicamentoService();
            sinon.stub(medicamentoService, 'createMedicamento').resolves({ status: 'CREATED', data: mockMedicamentoCriado});

            const medicamentoController = new MedicamentoController(medicamentoService);

            mapStatusHTTPStub.returned(201)

            req.body = mockMedicamento
            await medicamentoController.createMedicamento(req as Request, res as Response);
             
    
            expect(res.status).to.be.calledWith(201);
            expect(res.json).to.have.been.calledWith(mockMedicamentoCriado);
        })
    })


    describe('Teste para a busca por medicamento por nome', async function () {

        it('Deve buscar o medicamento com sucesso retornando o status 200 e as informações do medicamento encontrado', async function () {

            const medicamentoService = new MedicamentoService();
            sinon.stub(medicamentoService, 'findMedicamentoByName').resolves(resultFindByPrincipioAtivo as any)

            const medicamentoController = new MedicamentoController(medicamentoService);

            mapStatusHTTPStub.returned(200)

            req = {
                query: {
                    nome: 'XXX'
                }
            } as unknown as Request;

            await medicamentoController.findMedicamentoByName(req as Request, res as Response);
             
    
            expect(res.status).to.have.been.calledWith(200);
            expect(res.json).to.have.been.calledWith(mockMedicamentoNome);
        })
    })

    describe('Teste para a busca por medicamento por principio ativo', async function () {

        it('Deve buscar o medicamento com sucesso retornando o status 200 e as informações do medicamento encontrado', async function () {

            const medicamentoService = new MedicamentoService();
            sinon.stub(medicamentoService, 'findMedicamentoByPrincipioAtivo').resolves(resultFindByName as any)

            const medicamentoController = new MedicamentoController(medicamentoService);

            mapStatusHTTPStub.returned(200)

            req = {
                query: {
                    principioAtivo: 'X'
                }
            } as unknown as Request;

            await medicamentoController.findMedicamentoByPrincipioAtivo(req as Request, res as Response);
             
    
            expect(res.status).to.have.been.calledWith(200);
            expect(res.json).to.have.been.calledWith(mockMedicamentoNome);
        })
    })
});