class ServerError extends Error {
  constructor(message, status = 400){
    super(message);
    this.status = status;
  }
}

ServerError.NotFound = class NotFound extends ServerError {
  constructor() {
    super('not found', 404);
  }
} 

module.exports = ServerError;
