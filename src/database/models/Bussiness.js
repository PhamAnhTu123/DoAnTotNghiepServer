import mongoose from 'mongoose';
import BaseModel from './BaseModel';
import { BUSSINESS_STATUS } from '../../constants/type';

const BussinessSchema = new mongoose.Schema(
  {
    bussinessName: {
      type: String,
    },
    bussinessDescription: {
      type: String,
    },
    status: {
      type: String,
      enum: Object.values(BUSSINESS_STATUS),
      default: BUSSINESS_STATUS.PENDING,
    },
    address: {
      type: String,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'owners',
    },
    city: {
      type: mongoose.Types.ObjectId,
      ref: 'cities',
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'categories',
    },
    tags: {
      type: [String],
    },
    rating: {
      type: [Number],
    },
    images: {
      type: [String],
    },
    phone: {
      type: String,
    },
    availableTime: {
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

BussinessSchema.loadClass(BaseModel);

export default mongoose.model('bussinesses', BussinessSchema);
