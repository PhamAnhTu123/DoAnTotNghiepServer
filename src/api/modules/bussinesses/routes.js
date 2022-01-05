import BussinessHandler from './handler';

export default class BussinessRoutes {
  constructor(server) {
    this.handler = new BussinessHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'GET',
        path: '/api/v1/bussinesses/{id}',
        options: this.handler.getOne,
      },
      {
        method: 'GET',
        path: '/api/v1/bussinesses',
        options: this.handler.getMany,
      },
      {
        method: 'GET',
        path: '/api/v1/owners/me/bussinesses',
        options: this.handler.getOwnerBussiness,
      },
      {
        method: 'POST',
        path: '/api/v1/bussinesses',
        options: this.handler.addOne,
      },
      {
        method: 'PUT',
        path: '/api/v1/bussinesses/{id}/{submition}',
        options: this.handler.submitBussiness,
      },
    ];
    return routes;
  }
}
