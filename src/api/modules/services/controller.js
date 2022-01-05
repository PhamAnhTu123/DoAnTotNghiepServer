import Controller from '../../core/Controller';
import ServicesService from './service';

export default class ServiceController extends Controller {
  constructor() {
    super();
    this.service = new ServicesService();
  }

  getServiceOfBussiness(request) {
    const {
      params: { id },
    } = request;
    return this.service.getServiceOfBussiness(id);
  }
}
