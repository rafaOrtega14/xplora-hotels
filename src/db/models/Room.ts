import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { RoomAttributes } from '../../domain/Room';

interface RoomCreationAttributes extends Optional<RoomAttributes, 'room_id'> {}

@Table({
  modelName: "room",
  tableName: "room",
})
class Room extends Model<RoomAttributes, RoomCreationAttributes> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  room_id: number;

  @Column(DataType.STRING)
  room_name: string;

  @Column(DataType.STRING)
  room_description: string;

  @Column(DataType.NUMBER)
  guest_number: number;

  @Column(DataType.STRING)
  image: string;

  @Column(DataType.NUMBER)
  price_night: number;
}

export default Room;