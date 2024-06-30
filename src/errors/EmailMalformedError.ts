export default class EmailMalformedError extends Error {
    constructor(){
        super('Email is malformed')
    }
}