/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import connectDb from '../../../server/config/database';
import Trip from '../../../server/trip/trip.model';
import { getSingleUser } from '../../../server/user/user.service';
import { getSingleTrip } from '../../../server/trip/trip.service';

export default async (req, res) => {
  await connectDb();
  const { body } = req;
  const id = '6322387b7d615d2fa6309db0';
  const { trips } = await getSingleUser(id);

  const trip = await getSingleTrip(id);

  try {
    const newTrip = new Trip(body);
    const savedTrip = await newTrip.save();
    /*
    const addToUser = await updateUser(user, {
      $push: { trips: savedTrip._id },
    }); */
    return res.status(201).json(addToUser);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
