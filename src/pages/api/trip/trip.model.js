import { Schema, model, models } from 'mongoose';

const TripSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default models.Trip || model('Trip', TripSchema);
