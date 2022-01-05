import ReviewHandler from './handler';

export default class ReviewRoutes {
  constructor(server) {
    this.handler = new ReviewHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'POST',
        path: '/api/v1/reviews',
        options: this.handler.addOne,
      },
      {
        method: 'Get',
        path: '/api/v1/bussinesses/{id}/reviews',
        options: this.handler.getReviewOfBussiness,
      },
    ];
    return routes;
  }
}
