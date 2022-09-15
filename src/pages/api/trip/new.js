/* eslint-disable import/no-anonymous-default-export */
import connectDb from '../../utils/database';
import Trip from './trip.model';
import { getSingleUser, updateUser } from '../user/user.service';

connectDb();

export default async (req, res) => {
  const { body } = req;
  const id = '6322387b7d615d2fa6309db0';

  const user = await getSingleUser(id);

  try {
    const newTrip = new Trip(body);
    const savedTrip = await newTrip.save();

    const addToUser = await updateUser(user, {
      $push: { trips: savedTrip._id },
    });
    return res.status(201).json(addToUser);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
