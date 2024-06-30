// Import the Sequelize module from sequelize-typescript
import { Sequelize } from "sequelize-typescript";
import { Address, Booking, Hotel, HotelRoom, Room } from "./models";

// Create a new Sequelize instance with the connection configuration
const connection = new Sequelize({
  dialect: "postgres", // Specifies the database dialect
  host: process.env.DATABASE_HOST, // Specifies the database host
  username: process.env.DATABASE_USERNAME, // Specifies the database username
  password: process.env.DATABASE_PASSWORD, // Specifies the database password
  database: process.env.DATABASE_DB, // Specifies the database name
  logging: false,
  models: ['./models']
});
connection.addModels([Hotel, Address, Room, Booking, HotelRoom]);

// Export the connection object as the default module
export default connection;