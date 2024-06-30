import request from "supertest";

import app from "../src/routes";
import hotelMock from "../mocks/hotel.mock";

describe("test availability search", () => {
  test("happy path", async () => {
    const res = await request(app).get("/availability?checkIn=2024-08-23&checkOut=2024-08-30");
    expect(res.status).toEqual(200)
    expect(res.body).toEqual(hotelMock);
  });

  test("should return NoDateProvidedError error", async () => {
    const res = await request(app).get("/availability");
    expect(res.status).toBe(400)
    expect(res.body).toEqual({code: 400, error: 'Not a valid date provided for search'});
  })

  test("should return CheckInGreaterThanCheckOutError error", async () => {
    const res = await request(app).get("/availability?checkIn=2024-08-30&checkOut=2024-08-23");
    expect(res.status).toBe(400)
    expect(res.body).toEqual({code: 400, error: 'CheckIn can not be greater than checkOut'});
  })
});