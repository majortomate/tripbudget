import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
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
        cityName: {
          type: String,
        },
        description: {
          type: String,
        },
        image: {
          type: String,
        },
        travelDate: {
          type: Date,
        },
      },
    ],
    trips:
      [
        {
          type: Schema.Types.ObjectId,
          ref: 'Trip',
        },
      ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default models.User || model('User', UserSchema);
