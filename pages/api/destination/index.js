/* eslint-disable import/no-anonymous-default-export */
import connectDb from '../../../server/config/database';
import Destination from '../../../server/destination/destination.model';
import { updateTrip } from '../../../server/trip/trip.service';

export default async (req, res) => {
  const { method, body } = req;
  await connectDb();
  switch (method) {
    case 'GET':
      try {
        const destinations = await Destination.find({}).populate('trip');
        return res.status(200).json(destinations);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case 'POST':
      const { trip } = body;
      try {
        const newDestination = new Destination(body);
        const savedDestination = await newDestination.save();

        await updateTrip(trip, {
          $push: { destinations: savedDestination._id },
        });
        return res.status(201).json(savedDestination);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return [];
  }
};
