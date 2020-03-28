const supertestRequest = require("supertest");
const app = require("../../src/app");
const databaseConnection = require("../../src/database/databaseConnection");
describe("ONG", () => {
  beforeEach(async () => {
    await databaseConnection.migrate.rollback();
    await databaseConnection.migrate.latest();
  });

  afterAll(async () => {
      await databaseConnection.destroy();
  });

  it("should create a new ONG in the database", async () => {
    const response = await supertestRequest(app)
      .post("/ongs")
      .send({
        name: "ALPS",
        email: "contato@alps.com.br",
        whatsapp: "12345678910",
        city: "São Paulo",
        uf: "SP"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.success).toBe(true);
  });
});
