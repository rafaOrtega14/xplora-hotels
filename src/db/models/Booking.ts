import { Table, Column, Model, DataType, PrimaryKey, ForeignKey, AutoIncrement } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { BookingAttributes } from '../../domain/Booking';

interface BookingCreationAttributes extends Optional<BookingAttributes, 'booking_id'> {}

@Table({
  modelName: "booking",
  tableName: "booking",
})
class Booking extends Model<BookingAttributes, BookingCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  booking_id: number;

  @Column(DataType.DATE)
  check_in: Date;

  @Column(DataType.DATE)
  check_out: Date;

  @Column(DataType.NUMBER)
  room_id: number;

  @Column(DataType.STRING)
  customer_email: string;
}

export default Booking;