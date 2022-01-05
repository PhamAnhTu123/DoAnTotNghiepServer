import CategoryHandler from './handler';

export default class CategoryRoutes {
  constructor(server) {
    this.handler = new CategoryHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'POST',
        path: '/api/v1/admins/categories',
        options: this.handler.addOne,
      },
      {
        method: 'GET',
        path: '/api/v1/categories',
        options: this.handler.getAll,
      },
    ];
    return routes;
  }
}
