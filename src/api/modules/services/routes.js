import ServiceHandler from './handler';

export default class ServiceRoutes {
  constructor(server) {
    this.handler = new ServiceHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'POST',
        path: '/api/v1/services',
        options: this.handler.addOne,
      },
      {
        method: 'Get',
        path: '/api/v1/bussinesses/{id}/services',
        options: this.handler.getServiceOfBussiness,
      },
    ];
    return routes;
  }
}
