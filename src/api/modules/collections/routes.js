import CollectionHandler from './handler';

export default class CollectionRoutes {
  constructor(server) {
    this.handler = new CollectionHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'POST',
        path: '/api/v1/collections',
        options: this.handler.createCollection,
      },
      {
        method: 'PUT',
        path: '/api/v1/collections/{id}',
        options: this.handler.addBussiness,
      },
      {
        method: 'Get',
        path: '/api/v1/users/me/collection',
        options: this.handler.getCollectionOfUser,
      },
      {
        method: 'Get',
        path: '/api/v1/collections/{id}',
        options: this.handler.getOne,
      },
    ];
    return routes;
  }
}
