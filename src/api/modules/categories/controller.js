import Controller from '../../core/Controller';
import CategoryService from './service';

export default class CategoryController extends Controller {
  constructor() {
    super();
    this.service = new CategoryService();
  }
}
