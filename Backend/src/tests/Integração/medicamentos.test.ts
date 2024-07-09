import * as sinon from 'sinon';
import chai from 'chai'; 
import chaiHttp from 'chai-http';

// import App from '../../app';
// import { mockMedicamento2, mockMedicamentoCriado2 } from '../mocks/validationsMocks';
// import SequelizeMedicamento from '../../database/models/SequelizeMedicamento';
// import Validations from '../../middlewares/Validations';

// chai.use(chaiHttp);

// const { app } = new App();

// const { expect } = chai;

// describe('Testes de integração da API de medicamentos', function() {

//   it('Deve criar o medicamento com sucesso', async function () {

//     sinon.stub(SequelizeMedicamento, 'create').resolves(mockMedicamentoCriado2 as any);
//     sinon.stub(Validations, 'validateMedicamento').returns();
    
//     const returnedData = await chai.request(app).post('/medicamentos')
//       .send(mockMedicamento2)

//     expect(returnedData.status).to.be.equal(201); 
//   });
// });