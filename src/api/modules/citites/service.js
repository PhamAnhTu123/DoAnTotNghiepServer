import Service from '../../core/Service';
import City from '../../../database/models/City';

export default class CityService extends Service {
  constructor() {
    super();
    this.model = City;
  }
}
