import OwnerHandler from './handler';

export default class OwnerRoutes {
  constructor(server) {
    this.handler = new OwnerHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'GET',
        path: '/api/v1/owners',
        options: this.handler.getMany,
      },
      {
        method: 'GET',
        path: '/api/v1/owners/{id}',
        options: this.handler.getOne,
      },
      {
        method: 'GET',
        path: '/api/v1/owners/me',
        options: this.handler.getMe,
      },
      {
        method: 'PUT',
        path: '/api/v1/owners/{id}',
        options: this.handler.updateOne,
      },
    ];
    return routes;
  }
}
