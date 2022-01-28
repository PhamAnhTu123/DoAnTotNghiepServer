import Boom from '@hapi/boom';
import Service from '../../core/Service';
import Review from '../../../database/models/Review';
import Bussiness from '../../../database/models/Bussiness';
import errors from '../../../constants/errors';

export default class ReviewService extends Service {
  constructor() {
    super();
    this.model = Review;
  }

  async createReview(payload, userId) {
    const checkReview = await this.model.findOne({
      bussiness: payload.bussiness,
      user: userId,
    });
    if (checkReview) {
      throw Boom.badRequest(errors.USER_ALREADY_RATED);
    }
    const review = await this.model.create({
      ...payload,
      user: userId,
    });
    const buss = await Bussiness.findById(payload.bussiness);
    let score = buss.rating.reduce((a, b) => a + b);
    score += payload.point;
    await Bussiness.findByIdAndUpdate(payload.bussiness, {
      $push: { rating: payload.point },
      totalScore: score / (buss.rating.length + 1),
      $inc: { rateTimes: 1 },
    });
    return review;
  }

  async getReviewOfBussiness(id, query) {
    query.filter = {
      ...query.filter,
      bussiness: id,
    };
    const reviews = await this.model.queryBuilder(query, ['user']);
    return reviews;
  }
}
