import { Request, Response } from 'express';
import { BookingAttributes } from '../domain';
import CreateBookingUseCase from '../useCases/CreateBookingUseCase';
import ValidatorHelper from '../helpers/validatorHelper';
import EmailMalformedError from '../errors/EmailMalformedError';

export default class BookingController {
    static async create(req: Request, res: Response) {
        try {
            const bookingPayload = req.body as BookingAttributes
            if(!ValidatorHelper.validateEmail(bookingPayload.customer_email)) {
                throw new EmailMalformedError()
            }
            const booking = await CreateBookingUseCase.execute(bookingPayload)
            res.send(booking);
        }catch(e){
            let statusError = 500;
            let errorMessage = 'UnExpected Error'
            if(e instanceof EmailMalformedError) {
                statusError = 400;
                errorMessage = e.message;
            }
            res.status(statusError).send({
                error: errorMessage,
                status: statusError
            })
        }
    }
}