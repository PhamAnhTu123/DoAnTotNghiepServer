import NewsHandler from './handler';

export default class NewsRoutes {
  constructor(server) {
    this.handler = new NewsHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'POST',
        path: '/api/v1/news',
        options: this.handler.addOne,
      },
      {
        method: 'Get',
        path: '/api/v1/bussinesses/{id}/news',
        options: this.handler.getNewsOfBussiness,
      },
    ];
    return routes;
  }
}
