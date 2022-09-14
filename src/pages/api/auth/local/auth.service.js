import jwt from 'jsonwebtoken';
import User from '../../user/user.model';

export const signToken = (payload) => {
  const token = jwt.sign(
    payload,
    process.env.TOKEN,
    { expiresIn: '1h' },
  );
  return token;
};

export const verifyToken = async (token) => {
  try {
    const payload = await jwt.verify(token, process.env.TOKEN);
    return payload;
  } catch (error) {
    return null;
  }
};

export const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers?.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'No token' });
  }

  const token = authHeader.split(' ')[1];

  // validate token
  const decoded = await verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // add user to request
  const { email } = decoded;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  next();
  return true;
};
