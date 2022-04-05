const sinon = require("sinon");
const { expect } = require("chai");

const salesModel = require("../../../models/salesModel");
const salesService = require("../../../services/salesService");

describe("testing sales service", () => {
  describe("getAllSales function", () => {
    describe("when it returns the products", () => {
      const listProducts = [
        {
          id: 1,
          name: "product A",
          quantity: 10,
        },
        {
          id: 2,
          name: "product B",
          quantity: 20,
        },
      ];

      before(() => {
        sinon.stub(salesModel, "getAllSales").resolves(listProducts);
      });

      after(() => {
        salesModel.getAllSales.restore();
      });

      it("returns an array", async () => {
        const response = await salesService.getAllSales();

        expect(response).to.be.a("array");
      });

      it("returns an object with the right properties", async () => {
        const response = await salesService.getAllSales();

        response.forEach((e) => expect(e).to.have.a.property("name"));
      });
    });
  });
  describe('getByIdSales function', () => {
    describe('when it returns the sales by id', () => {
      const product = {
        id: 1,
        name: "product A",
        quantity: 10
      }

      before(() => {
        sinon.stub(salesModel, 'getByIdSales').resolves([product]);
      })

      after(() => {
        salesModel.getByIdSales.restore();
      })
  
      it('returns an array from product', async () => {
        const response = await salesService.getByIdSales(1);
  
        expect(response).to.be.an('array');
      });
  
      it('returns an object with the right properties', async () => {
        const response = await salesService.getByIdSales(1);

        response.forEach((e) => expect(e).to.have.a.property("id"));
      });
    })
  })
});
