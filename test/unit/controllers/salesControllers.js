const sinon = require('sinon');
const { expect } = require('chai');

const salesService = require('../../../services/salesService');
const salesController = require('../../../controllers/salesController');

describe('Sales Controller', () => {
  describe('Função getAll', () => {
    const response = {};
    const request = {};

    describe('quando não tem o retorno esperando', () => {
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
  
        sinon.stub(salesService, 'getAllSales').resolves(false);
      });
  
      after(async () => {
        salesService.getAllSales.restore();
      });

      it('status com o código 404', async () => {
        await salesController.getAllSales(request, response);

        expect(response.status.calledWith(404)).to.be.equal(true);
      });
  
      it('send retorna um array vazio', async () => {
        await salesController.getAllSales(request, response);

        expect(response.json.calledWith({ message: 'Nenhuma sale retornada' })).to.be.equal(true);
      });
    });

    describe('quando tem o retorno esperado', () => {
      const listSales =  [
        {
          saleId: 1,
          date: '2021-09-09T04:54:29.000Z',
          productId: 1,
          quantity: 2
        },
        {
          saleId: 1,
          date: '2021-09-09T04:54:54.000Z',
          productId: 2,
          quantity: 2
        }
      ];
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
  
        sinon.stub(salesService, 'getAllSales').resolves(listSales);
      });
  
      after(async () => {
        salesService.getAllSales.restore();
      });

      it('status com o código 200', async () => {
        await salesController.getAllSales(request, response);

        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('json retorna um array com os produtos', async () => {
        await salesController.getAllSales(request, response);

        expect(response.json.calledWith(listSales)).to.be.equal(true);
      });
    });
  });

  describe('Função getById', () => {
    const response = {};
    const request = {};

    request.params = { id: 1 }

    const resReject = { message: 'Sale not found' };

    describe('quando o produto não é encontrado', () => {
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
  
        sinon.stub(salesService, 'getByIdSales').resolves(false);
      });

      after(async () => {
        salesService.getByIdSales.restore();
      });

      it('status com o código 404', async () => {
        await salesController.getByIdSales(request, response);

        expect(response.status.calledWith(404)).to.be.equal(true);
      });

      it('json retorna um objeto', async () => {
        await salesController.getByIdSales(request, response);
        
        expect(response.json.calledWith(resReject)).to.be.equal(true);
      });
    })
  });
});