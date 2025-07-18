import mongoose, { Schema, model, models, Document } from 'mongoose';

export type UserRole = 'client' | 'provider';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  phone?: string;
  services?: mongoose.Types.ObjectId[]; 
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
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
      enum: ['client', 'provider'],
      required: true
    },
    phone: {
      type: String
    },
    services: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Service'
      }
    ]
  },
  {
    timestamps: true
  }
);

const User = models.User || model<IUser>('User', UserSchema);
export default User;
