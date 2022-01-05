import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const CategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
    },
    categoryDescription: {
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

CategorySchema.loadClass(BaseModel);

export default mongoose.model('categories', CategorySchema);
