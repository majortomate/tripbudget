/* eslint-disable import/no-anonymous-default-export */
import connectDb from '../../../server/config/database';
import Destination from '../../../server/destination/destination.model';
import { getSingleUser } from '../../../server/user/user.service';
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
      const id = '6322387b7d615d2fa6309db0';

      const user = await getSingleUser(id);
      const { trips } = user;

      const sameTrip = trips.filter((trip) => String(trip.user) === String(user._id));
      if (!sameTrip) {
        return res.status(404).json({ failed: 'Trips dont match' });
      }
      try {
        const newDestination = new Destination(body);
        const savedDestination = await newDestination.save();

        const addToTrip = await updateTrip(sameTrip, {
          $push: { destinations: savedDestination._id },
        });
        return res.status(201).json(addToTrip);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return [];
  }
};
