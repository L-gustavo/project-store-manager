const sinon = require("sinon");
const { expect } = require("chai");

const productService = require("../../../services/productService");
const productController = require("../../../controllers/productController");

describe("Products Controller", () => {
  describe("Função getAll", () => {
    const response = {};
    const request = {};

    describe("quando não tem o retorno esperado", () => {
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon.stub(productService, "getAllProduct").resolves(false);
      });

      after(async () => {
        productService.getAllProduct.restore();
      });

      it("status com o código 404", async () => {
        await productController.getAllProduct(request, response);

        expect(response.status.calledWith(404)).to.be.equal(true);
      });

      it("Nenhum produto encontrado", async () => {
        await productController.getAllProduct(request, response);

        expect(response.json.calledWith({ message: 'Nenhum produto retornado' })).to.be.equal(true);
      });
    });

    describe("quando tem o retorno esperado", () => {
      const listProducts = [
        {
          id: 1,
          name: "product A",
          quantity: 10
        },
        {
          id: 2,
          name: "product B",
          quantity: 20
        }
      ];
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon.stub(productService, "getAllProduct").resolves(listProducts);
      });

      after(async () => {
        productService.getAllProduct.restore();
      });

      it("status com o código 200", async () => {
        await productController.getAllProduct(request, response);

        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it("json retorna um array com os produtos", async () => {
        await productController.getAllProduct(request, response);

        expect(response.json.calledWith(listProducts)).to.be.equal(true);
      });
    });
  });

  describe('Função getById', () => {
    const response = {};
    const request = {};
    const next = {};

    request.params = { id: 1 }

    const resReject = { message: 'Product not found' };

    describe('quando o produto não é encontrado', () => {
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
  
        sinon.stub(productService, 'getByIdProduct').resolves(false);
      });
  
      after(async () => {
        productService.getByIdProduct.restore();
      });

      it('status com o código 404', async () => {
        await productController.getByIdProduct(request, response);
            
        expect(response.status.calledWith(404)).to.be.equal(true);
      });

      it('json retorna um objeto', async () => {
        await productController.getByIdProduct(request, response);
        
        expect(response.json.calledWith(resReject)).to.be.equal(true);
      });
    })
  });
});
