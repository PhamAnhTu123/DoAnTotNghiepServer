import Controller from '../../core/Controller';
import OwnerService from './service';

export default class OwnerController extends Controller {
  constructor() {
    super();
    this.service = new OwnerService();
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
