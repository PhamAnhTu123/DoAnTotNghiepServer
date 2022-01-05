import AuthOwnerHandler from './handler';

export default class AuthOwnerRouter {
  constructor(server) {
    this.handler = new AuthOwnerHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'POST',
        path: '/api/v1/auth/owners/login',
        options: this.handler.login,
      },
      {
        method: 'POST',
        path: '/api/v1/auth/owners/register',
        options: this.handler.register,
      },
    ];
    return routes;
  }
}
