import mongoose from 'mongoose';
import BaseModel from './BaseModel';

const CollectionSchema = new mongoose.Schema(
  {
    collectionName: {
      type: String,
    },
    collectionDescription: {
      type: String,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'owners',
    },
    bussinesses: {
      type: [String],
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

CollectionSchema.loadClass(BaseModel);

export default mongoose.model('collections', CollectionSchema);
