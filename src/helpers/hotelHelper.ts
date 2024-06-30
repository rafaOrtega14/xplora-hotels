import { Booking, Hotel, Room } from "../db/models";

export default class HotelHelper {
    
    static filterAvailableRooms(hotels: Hotel[], bookingsBetweenDates: Booking[]) {
        return hotels.map(hotel => {
            let filteredRooms = hotel.rooms
            if(bookingsBetweenDates.length > 0) {
                filteredRooms = hotel.rooms.filter(room => {
                    return bookingsBetweenDates.findIndex(booking => booking.room_id !== room.room_id) >= 0
                });
            }
            if(filteredRooms.length > 0){
                return HotelHelper.hotelResponseAdapter(hotel, filteredRooms)
            }
        })
    }
    private static hotelResponseAdapter(hotel: Hotel, rooms: Room[]) {
        return {
            id: hotel.hotel_id,
            name: hotel.hotel_name,
            description: hotel.hotel_description,
            image: hotel.hotel_image,
            rating: hotel.rating,
            address: hotel.address,
            rooms: HotelHelper.roomsResponseAdapter(rooms),
        }
    }
    private static roomsResponseAdapter(rooms: Room[]) {
        return rooms.map(room => {
            return {
                id: room.room_id,
                name: room.room_name,
                description: room.room_description,
                image: room.image,
                guests: room.guest_number,
                price: room.price_night
            }
        })

    }
}