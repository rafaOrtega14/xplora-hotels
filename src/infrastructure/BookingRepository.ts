import { Op } from "sequelize";
import { Booking } from "../db/models";
import { BookingAttributes } from "../domain";

export default class BookingRepository {
    static async findBookingsBetweenDates(checkInDate: Date, checkOutDate: Date) {
        const bookings = await Booking.findAll({
            where: {
              [Op.or]: {
                check_in: {
                  [Op.between]: [checkInDate, checkOutDate],
                },
                check_out: {
                  [Op.between]: [checkInDate, checkOutDate],
                },
              }
            },
        });
        return bookings;
    }

    static async create(bookingPayload: BookingAttributes) {
      const booking = await Booking.create(bookingPayload)
      return booking
    }
}