import CheckInGreaterThanCheckOutError from "../errors/CheckInGreaterThanCheckOutError";
import HotelHelper from "../helpers/hotelHelper"
import { BookingRepository, HotelRepository } from "../infrastructure"

export default class FindAvailabilityUseCase {
  static async execute(checkIn: string, checkOut: string) {
      const checkInDate = new Date(checkIn as string)
      const checkOutDate = new Date(checkOut as string);
      if(checkInDate > checkOutDate) throw new CheckInGreaterThanCheckOutError()
      const hotelsPromise = HotelRepository.findHotels()
      const bookingsBetweenDatesPromise = BookingRepository.findBookingsBetweenDates(checkInDate, checkOutDate)
      const [hotels, bookingsBetweenDates] = await Promise.all([hotelsPromise, bookingsBetweenDatesPromise])
      const filteredHotels = HotelHelper.filterAvailableRooms(hotels, bookingsBetweenDates)
      return filteredHotels
  }
}
