import { Request, Response } from "express";
import FindAvailabilityUseCase from "../useCases/FindAvailabilityUseCase";
import CheckInGreaterThanCheckOutError from "../errors/CheckInGreaterThanCheckOutError";
import NoDateProvidedError from "../errors/NoDateProvidedError";

interface AvailabilityQueryDTO {
  checkIn?: string;
  checkOut?: string;
}

export default class HotelController {
  static async availability(req: Request, res: Response) {
    try {
      const { checkIn, checkOut } =
        req.query as unknown as AvailabilityQueryDTO;
      if(!checkIn || !checkOut) throw new NoDateProvidedError()
      const availability = await FindAvailabilityUseCase.execute(
        checkIn,
        checkOut
      );
      res.send(availability);
    } catch (e) {
        let statusCode = 500;
        let errorMessage = 'Unexpected Error';
      if (
        e instanceof CheckInGreaterThanCheckOutError || 
        e instanceof NoDateProvidedError) {
        statusCode = 400;
        errorMessage = e.message;
      }
      res.status(statusCode).send({
        error: errorMessage,
        code: statusCode,
      });
    }
  }
}
