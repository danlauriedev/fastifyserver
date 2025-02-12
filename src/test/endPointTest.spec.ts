import request from "supertest";
import { FastifyInstance } from "fastify";
import { buildFastify } from "../fastify";
import { fixtureData } from "../mockData/fixtureData";

let app: FastifyInstance;

beforeAll(async () => {
  app = await buildFastify();
  await app.ready();
});

afterAll(async () => {
  await app.close();
});

describe("GET /scores", () => {
  it("should return 200 and the expected response", async () => {
    const response = await request(app.server)
      .get("/scores")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual({
      ...fixtureData,
    });
  });
});
