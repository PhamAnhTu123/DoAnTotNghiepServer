import Controller from '../../core/Controller';
import BussinessService from './service';

export default class BussinessController extends Controller {
  constructor() {
    super();
    this.service = new BussinessService();
  }

  submitBussiness(request) {
    const {
      params: { id, submition },
    } = request;
    return this.service.submitBussinesses(id, submition);
  }

  findOne(request) {
    const {
      params: { id },
    } = request;
    return this.service.findOne(id);
  }

  getAllBussiness(request) {
    const { query } = request;
    return this.service.getAllBussiness(query);
  }

  getOwnerBussiness(request) {
    const {
      auth: {
        credentials: { id: userId },
      },
    } = request;
    return this.service.getOwnerBussiness(userId);
  }
}
