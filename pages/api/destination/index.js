/* eslint-disable import/no-anonymous-default-export */
import connectDb from '../../../server/config/database';
import Destination from '../../../server/destination/destination.model';

export default async (req, res) => {
  await connectDb();
  try {
    const destinations = await Destination.find({}).populate('trip');
    return res.status(200).json(destinations);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
