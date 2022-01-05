import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const ServiceSchema = new mongoose.Schema(
  {
    bussiness: {
      type: mongoose.Types.ObjectId,
      ref: 'bussinesses',
    },
    serviceName: {
      type: String,
    },
    serviceDescription: {
      type: String,
    },
    servicePrice: {
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

ServiceSchema.loadClass(BaseModel);

export default mongoose.model('services', ServiceSchema);
