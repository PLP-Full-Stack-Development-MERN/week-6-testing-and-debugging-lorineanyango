const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

test("Should create a new bug", async () => {
  const res = await request(app).post("/api/bugs").send({ title: "Bug 1", description: "Test bug" });
  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe("Bug 1");
});