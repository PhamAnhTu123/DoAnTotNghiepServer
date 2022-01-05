import Service from '../../core/Service';
import ServiceModel from '../../../database/models/Services';

export default class ServicesService extends Service {
  constructor() {
    super();
    this.model = ServiceModel;
  }

  async getServiceOfBussiness(id) {
    const services = await this.model.find({ bussiness: id });
    return services;
  }
}
