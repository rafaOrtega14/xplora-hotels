import { Table, Column, Model, DataType, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import Hotel from './Hotel';
import Room from './Room';

interface HotelRoomAttributes {
  hotel_room_id: number;
  hotel_id: number;
  room_id: number;
}

interface HotelRoomCreationAttributes extends Optional<HotelRoomAttributes, 'hotel_room_id'> {}

@Table({
  modelName: "hotel_room",
  tableName: "hotel_room",
})
class HotelRoom extends Model<HotelRoomAttributes, HotelRoomCreationAttributes> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  hotel_room_id: number;

  @ForeignKey(() => Hotel)
  @Column(DataType.NUMBER)
  hotel_id: number;

  @ForeignKey(() => Room)
  @Column(DataType.NUMBER)
  room_id: number;
}

export default HotelRoom;