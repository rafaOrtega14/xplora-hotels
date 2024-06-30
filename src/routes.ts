import express from 'express';
import { BookingController, HotelController } from './controllers';
import cors from 'cors';
require('dotenv').config()

const app = express();

app.use(express.json())
app.use(cors())

app.get('/availability', HotelController.availability);
app.post('/booking', BookingController.create)

export default app;