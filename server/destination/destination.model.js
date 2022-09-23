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
      default: 0,
    },
    foodDailyBudget: {
      type: Number,
      default: 0,
    },
    transportationDailyBudget: {
      type: Number,
      default: 0,
    },
    localTransportationBudget: {
      type: Number,
      default: 0,
    },
    souvenirsDailyBudget: {
      type: Number,
      default: 0,
    },
    toursAndEntrancesDailyBudget: {
      type: Number,
      default: 0,
    },
    othersDailyBudget: {
      type: Number,
      default: 0,
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

DestinationSchema.pre('save', (next) => {
  DestinationSchema.aggregate([
    { $match: { $text: 'Budget' } },
    { $group: { _id: null, amount: { $sum: '$amount' } } },
  ]);
  next();
});

export default models.Destination || model('Destination', DestinationSchema);
