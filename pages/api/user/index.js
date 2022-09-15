/* eslint-disable import/no-anonymous-default-export */
import connectDb from '../../../server/config/database';
import User from '../../../server/user/user.model';

export default async (req, res) => {
  await connectDb();
  try {
    const users = await User.find({}).populate('trips');
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
