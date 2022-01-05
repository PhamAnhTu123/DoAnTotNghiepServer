import Controller from '../../core/Controller';
import ReviewService from './service';

export default class ReviewController extends Controller {
  constructor() {
    super();
    this.service = new ReviewService();
  }

  createReview(request) {
    const {
      payload,
      auth: {
        credentials: { id: userId },
      },
    } = request;
    return this.service.createReview(payload, userId);
  }

  getReviewOfBussiness(request) {
    const {
      params: { id },
      query,
    } = request;
    return this.service.getReviewOfBussiness(id, query);
  }
}
