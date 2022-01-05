import Controller from '../../core/Controller';
import UserService from './service';

export default class UserController extends Controller {
  constructor() {
    super();
    this.service = new UserService();
  }

  getMe(request) {
    const {
      auth: {
        credentials: { id: userId },
      },
    } = request;
    return this.service.getMe(userId);
  }
}
