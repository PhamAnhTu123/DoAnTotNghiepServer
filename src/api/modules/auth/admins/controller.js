import Controller from '../../../core/Controller';
import AuthAdminService from './service';

export default class AuthOwnerController extends Controller {
  constructor() {
    super();
    this.service = new AuthAdminService();
  }

  login(request) {
    const { payload } = request;
    return this.service.login(payload);
  }
}
