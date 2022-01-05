import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const CitySchema = new mongoose.Schema(
  {
    cityName: {
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

CitySchema.loadClass(BaseModel);

export default mongoose.model('cities', CitySchema);
