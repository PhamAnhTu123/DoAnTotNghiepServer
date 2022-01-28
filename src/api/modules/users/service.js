import Service from '../../core/Service';
import User from '../../../database/models/User';

export default class UserService extends Service {
  constructor() {
    super();
    this.model = User;
  }

  async getMe(userId) {
    const user = await this.model.findById(userId);
    return user;
  }

  async updateMe(userId, payload) {
    const user = await this.model.findByIdAndUpdate(userId, payload);
    return user;
  }
}
