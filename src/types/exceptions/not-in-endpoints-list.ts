export class NotInEndpointsList extends Error {
  constructor(endpoint: unknown) {
    super(`Endpoint "${endpoint}" is missing from ApiConfig. Please update the endpoints configuration.`);

    Object.setPrototypeOf(this, NotInEndpointsList.prototype);

    this.name = this.constructor.name;
  }
}