import request from "supertest";

import app from "../src/routes";
import bookingMock from "../mocks/booking.mock";


describe("test booking", () => {
  test("happy path", async () => {
    const bookingRequest = {
        "check_in": "2024-08-24",
        "check_out": "2024-08-26",
        "room_id": 1,
        "customer_email": 'rafa@rafa.com'
    }
    const res = await request(app).post("/booking").send(bookingRequest);
    expect(res.status).toEqual(200)
    expect(res.body).toEqual(expect.objectContaining({
        check_in: bookingMock.check_in,
        check_out: bookingMock.check_out,
        customer_email: bookingMock.customer_email,
        room_id: bookingMock.room_id
    }));
  });
  test("malformed email error", async () => {
    const bookingRequest = {
        "check_in": "2024-08-24",
        "check_out": "2024-08-26",
        "room_id": 1,
        "customer_email": 'raf.com'
    }
    const res = await request(app).post("/booking").send(bookingRequest);
    expect(res.status).toEqual(400)
    expect(res.body).toEqual({
        status: 400,
        error: 'Email is malformed'
    });
  });
});