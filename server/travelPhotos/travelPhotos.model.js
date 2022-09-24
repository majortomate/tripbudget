/* eslint-disable import/prefer-default-export */
import { Schema, model, models } from 'mongoose';

const TravelPhotosSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
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
  {
    timestamps: true,
    versionKey: false,
  },
);

export default models.TravelPhotos || model('TravelPhotos', TravelPhotosSchema);
