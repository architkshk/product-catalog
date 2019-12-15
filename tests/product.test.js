const request = require("supertest");
const server = require("../index");

describe("Product Endpoints", () => {
  it("should get all products", async () => {
    const res = await request(server).get("/products");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("products");
  });
});
