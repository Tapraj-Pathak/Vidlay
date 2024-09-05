class ApiError extends Error {
    constructor(statusCode ,message, errors=[], stack="") {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.stack = stack;
        this.data = null;
        this.success = false;   
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ApiError;