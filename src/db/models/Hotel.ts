import { Table, Column, Model, DataType, PrimaryKey, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import Address from './Address';
import Room from './Room';
import HotelRoom from './Hotel_room';
import { HotelAttributes } from '../../domain/Hotel';

interface HotelCreationAttributes extends Optional<HotelAttributes, 'hotel_id'> {}

@Table({
  modelName: "hotel",
  tableName: "hotel",
})
class Hotel extends Model<HotelAttributes, HotelCreationAttributes> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  hotel_id: number;

  @Column(DataType.STRING)
  hotel_name: string;

  @Column(DataType.STRING)
  hotel_description: string;

  @Column(DataType.NUMBER)
  rating: number;

  @Column(DataType.STRING)
  website: string

  @Column(DataType.STRING)
  hotel_image: string;

  @ForeignKey(() => Address)
  @Column(DataType.NUMBER)
  address_id: number;

  @BelongsToMany(() => Room, () => HotelRoom)
  rooms: Room[];
  
  @BelongsTo(() => Address, 'address_id')
  address: Address;
}

export default Hotel;