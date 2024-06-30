export default class NoDateProvidedError extends Error {
    constructor() {
        super('Not a valid date provided for search')
    }
}