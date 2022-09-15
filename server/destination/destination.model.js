import { Schema, model, models } from 'mongoose';

const DestinationSchema = new Schema(
  {
    cityName: {
      type: String,
      required: true,
      trim: true,
    },
    stayDateFrom: {
      type: Date,
      required: true,
    },
    stayDateTo: {
      type: Date,
      required: true,
    },
    accomodationDailyBudget: {
      type: Number,
    },
    foodDailyBudget: {
      type: Number,
    },
    transportationDailyBudget: {
      type: Number,
    },
    transferBudget: {
      type: Number,
    },
    souvenirsDailyBudget: {
      type: Number,
    },
    toursAndEntrancesDailyBudget: {
      type: Number,
    },
    othersDailyBudget: {
      type: Number,
    },
    trip: {
      type: Schema.Types.ObjectId,
      ref: 'Trip',
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default models.Destination || model('Destination', DestinationSchema);
