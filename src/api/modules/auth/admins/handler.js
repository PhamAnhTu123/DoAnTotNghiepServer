import AuthAdminController from './controller';
import AuthValidator from './validator';

class AuthOwnerHander {
  constructor(server) {
    this.controller = new AuthAdminController();
    this.validator = new AuthValidator();
    server.bind(this.controller);
  }

  login = () => ({
    tags: ['api', 'v1'],
    description: 'Login with account',
    notes: 'Login with available account',
    handler: this.controller.login,
    auth: false,
    validate: {
      payload: this.validator.payloadLogin,
    },
  });
}

export default AuthOwnerHander;
