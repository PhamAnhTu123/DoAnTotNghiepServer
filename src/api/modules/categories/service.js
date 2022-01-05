import Service from '../../core/Service';
import Category from '../../../database/models/Category';

export default class CategoryService extends Service {
  constructor() {
    super();
    this.model = Category;
  }
}
