/* eslint-disable import/no-anonymous-default-export */
import connectDb from '../../../server/config/database';
import Trip from '../../../server/trip/trip.model';

export default async (req, res) => {
  await connectDb();
  try {
    const trips = await Trip.find({}).populate('destinations');
    return res.status(200).json(trips);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
