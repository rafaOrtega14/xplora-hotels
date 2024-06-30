import { Address, Hotel, Room } from "../db/models";

export default class HotelRepository {
    static async findHotels(): Promise<Hotel[]> {
        const hotels = await Hotel.findAll({ include: [Room, Address]});
        return hotels;
    }
}