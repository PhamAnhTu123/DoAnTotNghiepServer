import AuthAdminHandler from './handler';

export default class AuthAdminRoutes {
  constructor(server) {
    this.handler = new AuthAdminHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'POST',
        path: '/api/v1/auth/admins/login',
        options: this.handler.login,
      },
    ];
    return routes;
  }
}
