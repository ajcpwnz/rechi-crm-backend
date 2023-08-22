import {BaseError} from "../interfaces/base.error.intrface";

export function getStatusCodeFromError(error: unknown) {
    return error instanceof BaseError ? error.httpStatus : 500;
}
