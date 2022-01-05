import CityHandler from './handler';

export default class CityRoutes {
  constructor(server) {
    this.handler = new CityHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'POST',
        path: '/api/v1/admins/cities',
        options: this.handler.addOne,
      },
      {
        method: 'GET',
        path: '/api/v1/cities',
        options: this.handler.getMany,
      },
    ];
    return routes;
  }
}
