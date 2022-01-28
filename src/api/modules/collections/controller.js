import Controller from '../../core/Controller';
import CollectionService from './service';

export default class CollectionController extends Controller {
  constructor() {
    super();
    this.service = new CollectionService();
  }

  createCollection(request) {
    const {
      payload,
      auth: {
        credentials: { id: userId },
      },
    } = request;
    return this.service.createCollection(payload, userId);
  }

  addBussiness(request) {
    const {
      params: { id },
      payload: { bussiness },
    } = request;
    return this.service.addBussiness(id, bussiness);
  }

  getCollectionOfUser(request) {
    const {
      auth: {
        credentials: { id: userId },
      },
    } = request;
    return this.service.getCollectionOfUser(userId);
  }

  getOneCollection(request) {
    const {
      params: { id },
    } = request;
    return this.service.getOneCollection(id);
  }
}
