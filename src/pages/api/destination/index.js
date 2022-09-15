/* eslint-disable import/no-anonymous-default-export */
import connectDb from '../../utils/database';
import Destination from './destination.model';

connectDb();

export default async (req, res) => {
  try {
    const destinations = await Destination.find({}).populate('trip');
    return res.status(200).json(destinations);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
