const request = require("supertest");
const app = require("../../src/server");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

test("Create a new bug", async () => {
  const res = await request(app)
    .post("/api/bugs")
    .send({ title: "Crash error", description: "App crashes" });

  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe("Crash error");
});
