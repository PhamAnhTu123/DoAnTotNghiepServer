import mongoose from 'mongoose';
import Bcrypt from '../../services/Bcrypt';
import ROLE from '../../constants/role';
import BaseModel from './BaseModel';

const OwnerSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
    },
    userName: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: Object.values(ROLE),
      default: ROLE.OWNER,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

OwnerSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await Bcrypt.hash(user.password);
  }

  next();
});

OwnerSchema.loadClass(BaseModel);

export default mongoose.model('owners', OwnerSchema);
