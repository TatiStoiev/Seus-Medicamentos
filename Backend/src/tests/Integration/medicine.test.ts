import * as sinon from 'sinon';
import * as chai from 'chai'; 
import request from 'supertest'
import App from '../../app';
import { mockMedicineCompleted2, mockMedicineCreated2 } from '../mocks/validationsMocks';
import SequelizeMedicine from '../../database/models/SequelizeMedicine';
import Validations from '../../middlewares/Validations';

const { app } = new App();

const { expect } = chai;

describe('Integration tests for Medicine API', function() {

    afterEach(function () {
        sinon.restore();        
    });

  it('Should create a new medicine successfully', async function () {

    sinon.stub(SequelizeMedicine, 'create').resolves(mockMedicineCreated2 as any);
    sinon.stub(Validations, 'validateMedicine').returns();
    
    const returnedData = await request(app).post('/medicine')
      .send(mockMedicineCompleted2)

    expect(returnedData.status).to.be.equal(201); 
  });
});