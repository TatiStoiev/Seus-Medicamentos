import * as sinon from 'sinon';
import * as chai from 'chai'; 
// @ts-ignore
import chaiHttp= require('chai-http');

import request from 'supertest'
import App from '../../app';
import { mockMedicamento2, mockMedicamentoCriado2 } from '../mocks/validationsMocks';
import SequelizeMedicamento from '../../database/models/SequelizeMedicamento';
import Validations from '../../middlewares/Validations';

const { app } = new App();

const { expect } = chai;

describe('Testes de integração da API de medicamentos', function() {

    afterEach(function () {
        sinon.restore();        
    });

  it('Deve criar o medicamento com sucesso', async function () {

    sinon.stub(SequelizeMedicamento, 'create').resolves(mockMedicamentoCriado2 as any);
    sinon.stub(Validations, 'validateMedicamento').returns();
    
    const returnedData = await request(app).post('/medicamentos')
      .send(mockMedicamento2)

    expect(returnedData.status).to.be.equal(201); 
  });
});