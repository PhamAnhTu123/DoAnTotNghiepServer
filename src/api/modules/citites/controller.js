import Controller from '../../core/Controller';
import CityService from './service';

export default class OwnerController extends Controller {
  constructor() {
    super();
    this.service = new CityService();
  }
}
