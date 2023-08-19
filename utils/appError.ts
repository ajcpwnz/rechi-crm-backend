class AppError extends Error {
    status: number;

    constructor(status: number, message: string) {
        super(message);
        this.name = 'AppError';
        this.status = status;
    }
}

export default AppError;