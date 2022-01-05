import Service from '../../core/Service';
import Owner from '../../../database/models/Owner';

export default class OwnerService extends Service {
  constructor() {
    super();
    this.model = Owner;
  }

  async getMe(userId) {
    const user = await this.model.findById(userId);
    return user;
  }
}
