export default class CheckInGreaterThanCheckOutError extends Error {
    constructor() {
        super('CheckIn can not be greater than checkOut')
    }
}