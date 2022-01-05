import Controller from '../../../core/Controller';
import AuthOwnerService from './service';

export default class AuthOwnerController extends Controller {
  constructor() {
    super();
    this.service = new AuthOwnerService();
  }

  login(request) {
    const { payload } = request;
    return this.service.login(payload);
  }

  register(request) {
    const { payload } = request;
    return this.service.register(payload);
  }
}
