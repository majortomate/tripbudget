/* eslint-disable import/no-anonymous-default-export */
import connectDb from '../../utils/database';
import User from './user.model';

connectDb();

export default async (req, res) => {
  try {
    const users = await User.find({}).populate('trips');
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
