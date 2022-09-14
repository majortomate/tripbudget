import { Schema, model, models } from 'mongoose';

const TripSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tripName: {
      type: String,
      required: true,
      trim: true,
    },
    tripDateFrom: {
      type: Date,
      required: true,
    },
    tripDateTo: {
      type: Date,
      required: true,
    },
    groupSize: [
      {
        type: String,
      },
    ],
    isPublic: {
      type: Boolean,
      default: true,
    },
    destinations: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Destination',
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default models.Trip || model('Trip', TripSchema);
