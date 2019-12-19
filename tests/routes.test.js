const request = require("supertest");
const server = require("../index");

describe("Product Endpoints", () => {
  it("should add a category", async () => {
    const res = await request(server)
      .post("/category/add")
      .send({
        name: `TestCategory ${new Date()}`
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status");
    expect(res.body).toHaveProperty("category");
  });

  it("should add a product", async () => {
    const res = await request(server)
      .post("/product/add")
      .send({
        name: `TestProduct ${new Date()}`,
        category: `TestCategory`,
        brand: "TEST"
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("product");
  });

  it("should get all products", async () => {
    const res = await request(server).get("/products");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("products");
  });
});
