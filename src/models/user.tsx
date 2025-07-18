import mongoose, { Schema, model, models, Document } from 'mongoose';

export type UserRole = 'Client' | 'Provider';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
  phone?: string;
  service?: string; 
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    role: {
      type: String,
      enum: ['Client', 'Provider'],
      required: true
    },
    phone: {
      type: String
    },
    service: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const User = models.User || model<IUser>('User', UserSchema);
export default User;
