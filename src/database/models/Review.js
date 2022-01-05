import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const ReviewSchema = new mongoose.Schema(
  {
    bussiness: {
      type: mongoose.Types.ObjectId,
      ref: 'bussinesses',
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'users',
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    point: {
      type: Number,
    },
    image: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

ReviewSchema.loadClass(BaseModel);

export default mongoose.model('reviews', ReviewSchema);
