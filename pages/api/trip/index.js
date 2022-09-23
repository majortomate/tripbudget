/* eslint-disable import/no-anonymous-default-export */
import connectDb from '../../../server/config/database';
import Trip from '../../../server/trip/trip.model';
import Destination from '../../../server/destination/destination.model';
import { getSingleUser, updateUser } from '../../../server/user/user.service';

export default async (req, res) => {
  const { method, body } = req;
  await connectDb();
  switch (method) {
    case 'GET':
      try {
        const trips = await Trip.find({}).sort([['createdAt', -1]]).populate({ path: 'destinations', model: Destination });
        return res.status(200).json({ trips });
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case 'POST':
      const { id } = body;
      const user = await getSingleUser(id);
      try {
        const newTrip = new Trip(body);
        const savedTrip = await newTrip.save();

        await updateUser(user, {
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
