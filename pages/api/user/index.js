/* eslint-disable import/no-anonymous-default-export */
import connectDb from '../../../server/config/database';
import User from '../../../server/user/user.model';
import Destination from '../../../server/destination/destination.model';
import Trip from '../../../server/trip/trip.model';
import TravelPhotos from '../../../server/travelPhotos/travelPhotos.model';

export default async (req, res) => {
  await connectDb();
  try {
    const users = await User.find({}).populate([{ path: 'trips', model: Trip, populate: { path: 'destinations', model: Destination } }, { path: 'travels', model: TravelPhotos }]);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
