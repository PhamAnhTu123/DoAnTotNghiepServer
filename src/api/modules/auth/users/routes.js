import AuthHandler from './handler';

export default class AuthRouter {
  constructor(server) {
    this.handler = new AuthHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'POST',
        path: '/api/v1/auth/users/login',
        options: this.handler.login,
      },
      {
        method: 'POST',
        path: '/api/v1/auth/users/register',
        options: this.handler.register,
      },
    ];
    return routes;
  }
}
