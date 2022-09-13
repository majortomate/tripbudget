/* eslint-disable import/no-anonymous-default-export */
import connectDb from '../../utils/database';
import Trip from './trip.model';

connectDb();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      try {
        const trips = await Trip.find();
        return res.status(200).json(trips);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case 'POST':
      try {
        const newTrip = new Trip(body);
        const savedTrip = await newTrip.save();
        return res.status(201).json(savedTrip);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: 'This method is not supported' });
  }
};
