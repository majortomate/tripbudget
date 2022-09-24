/* eslint-disable import/prefer-default-export */
import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
    basedCountry: {
      type: String,
    },
    currentCountry: {
      type: String,
    },
    bio: {
      type: String,
    },
    travels: [
      {
        type: Schema.Types.ObjectId,
        ref: 'TravelPhotos',
        require: true,
      },
    ],
    trips:
      [
        {
          type: Schema.Types.ObjectId,
          ref: 'Trip',
          require: true,
        },
      ],
    isActive: {
      type: Boolean,
      default: false,
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

UserSchema.virtual('profile').get(function profile() {
  const {
    _id, firstName, username, email,
  } = this;

  return {
    _id,
    firstName,
    username,
    email,
  };
});
export default models.User || model('User', UserSchema);
