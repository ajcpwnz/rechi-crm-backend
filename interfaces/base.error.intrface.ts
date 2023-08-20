interface ErrorOptions {
    cause?: unknown;
}

export class BaseError extends Error {
    httpStatus = 500;

    constructor(message: string, options?: ErrorOptions) {
        // @ts-ignore
        super(message, options);
        this.name = this.constructor.name;
    }

    toJSON() {
        return {
            name: this.name,
            message: this.message
        };
    }
}
