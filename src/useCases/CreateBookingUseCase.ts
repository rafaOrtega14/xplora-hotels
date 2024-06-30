import { BookingAttributes } from "../domain";
import { BookingRepository } from "../infrastructure";

export default class CreateBookingUseCase {
  static async execute(bookingPayload: BookingAttributes) {
      const booking = await BookingRepository.create(bookingPayload)
      return booking;
  }
}
