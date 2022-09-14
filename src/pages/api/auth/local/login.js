/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-underscore-dangle */
import User from '../../user/user.model';
import { signToken } from './auth.service';

export default async (req, res) => {
  const { method, body } = req;
  switch (method) {
    case 'POST':
      const { email, password } = body;
      if (!email || !password) {
        return res.status(400).json({ failed: 'All fields are required' });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'Wrong credentials' });
      }
      if (user.password !== password) {
        return res.status(404).json({ message: 'Wrong password' });
      }
      const token = signToken({ email: user.email });
      return res.status(200).json({ success: 'Youre now logged in', token });

    case 'GET':
      return res.status(200).json('in Login');
    default:
      break;
  }
};

/* const getAllUsersHandler = async (req, res) => {
  const users = await User.find({}).populate('favs');

  if (!users) {
    res.status(404).json('error');
  }
  res.status(200).json(users);
}; */
