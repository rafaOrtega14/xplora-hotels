import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { AddressAttributes } from '../../domain/Address';

interface AddressCreationAttributes extends Optional<AddressAttributes, 'address_id'> {}

@Table({
  modelName: "address",
  tableName: "address",
})
class Address extends Model<AddressAttributes, AddressCreationAttributes> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  address_id: number;

  @Column(DataType.STRING)
  postal_code: string;

  @Column(DataType.STRING)
  street: string;

  @Column(DataType.NUMBER)
  street_number: number;
}

export default Address;