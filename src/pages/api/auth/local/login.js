/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-underscore-dangle */
import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';
import User from '../../user/user.model';
import { signToken } from './auth.service';
import connectDb from '../../../utils/database';

export default async (req, res) => {
  connectDb();

  const { body } = req;
  const { email, password } = body;

  if (!email || !password) {
    return res.status(400).json({ failed: 'All fields are required' });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'Wrong credentials' });
  }
  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword) {
    return res.status(404).json({ message: 'Wrong password' });
  }
  const token = signToken({ email: user.email });
  const serialized = serialize('tokencito', token);
  res.setHeader('Set-Cookie', serialized);

  res.status(200).json({ success: 'Youre now logged in', token });
};
