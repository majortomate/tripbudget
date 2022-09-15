/* eslint-disable import/no-anonymous-default-export */
import connectDb from '../../utils/database';
import Trip from './trip.model';

connectDb();

export default async (req, res) => {
  try {
    const trips = await Trip.find({}).populate('destinations');
    return res.status(200).json(trips);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
