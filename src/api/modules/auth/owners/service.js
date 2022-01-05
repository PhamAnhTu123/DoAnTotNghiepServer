import Boom from '@hapi/boom';
import Service from '../../../core/Service';
import Owner from '../../../../database/models/Owner';
import JWT from '../../../../services/Jwt';
import Bcrypt from '../../../../services/Bcrypt';
import ERROR from '../../../../constants/errors';

export default class AuthOwnerService extends Service {
  async login(payload) {
    const { email, password } = payload;

    const user = await Owner.findOne({ email });
    if (!user) {
      throw Boom.badRequest('INCORECT_EMAIL');
    }

    if (!user.password) {
      throw Boom.badRequest('INCORECT_PASSWORD');
    }

    const correctPassword = await Bcrypt.compare(password, user.password);
    if (!correctPassword) {
      throw Boom.badRequest('INCORECT_PASSWORD');
    }

    return { token: JWT.issue({ id: user.id, scope: user.role }), user };
  }

  async register(payload) {
    if (await Owner.exists({ email: payload.email })) {
      throw Boom.badRequest(ERROR.DUPLICATE_EMAIL);
    }
    const user = await Owner.create(payload);
    return {
      status: true,
      body: user,
    };
  }
}
