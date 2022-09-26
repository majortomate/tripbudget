/* eslint-disable import/no-anonymous-default-export */
import connectDb from '../../../server/config/database';
import Trip from '../../../server/trip/trip.model';
import Destination from '../../../server/destination/destination.model';
import User from '../../../server/user/user.model';
import { getSingleUser, updateUser } from '../../../server/user/user.service';

export default async (req, res) => {
  const { method, body } = req;
  await connectDb();
  switch (method) {
    case 'GET':
      try {
        const trips = await Trip.find({}).sort([['createdAt', -1]]).populate([{ path: 'destinations', model: Destination }, { path: 'user', model: User }]);
        return res.status(200).json({ trips });
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case 'POST':
      const { user } = body;

      const userFound = await getSingleUser(user);

      try {
        const newTrip = new Trip(body);
        const savedTrip = await newTrip.save();

        await updateUser(userFound, {
          $push: { trips: savedTrip._id },
        });
        return res.status(201).json({ success: 'You just create a trip', savedTrip });
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }

    default:
      return [];
  }
};
