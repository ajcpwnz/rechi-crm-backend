import { BaseError } from "./base.error.intrface";

class UnknownErrorWrapper extends BaseError {
    constructor(private error: unknown) {
        super('Unknown error');
    }

    toString() {
        return `${this.name}: ${this.message} - ${this.error}`;
    }
}

export class ErrorWrapper extends BaseError {
    constructor(message: string, cause: unknown) {
        super(message, { cause: cause instanceof Error ? cause : new UnknownErrorWrapper(cause) });
    }
}

export class ControllerError extends ErrorWrapper {
    constructor(request: any, cause: unknown) {
        // @ts-ignore
        super(`[${request.method}] ${request.path}`, cause);
    }
}
