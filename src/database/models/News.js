import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const NewSchema = new mongoose.Schema(
  {
    bussiness: {
      type: mongoose.Types.ObjectId,
      ref: 'bussinesses',
    },
    title: {
      type: String,
    },
    content: {
      type: String,
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

NewSchema.loadClass(BaseModel);

export default mongoose.model('news', NewSchema);
