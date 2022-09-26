import axios from 'axios';
import jwt from 'jsonwebtoken';
// import User from '../../user/user.model';

export const register = (firstName, lastName, username, email, password) => axios.post('https://tripbudget-mnc8.vercel.app/api/auth/local/register', {
  firstName,
  lastName,
  username,
  email,
  password,
});
export const login = (email, password) => axios
  .post('https://tripbudget-mnc8.vercel.app/api/auth/local/login', {
    email,
    password,
  })
  .then((response) => {
    if (response) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });
export const logout = () => {
  localStorage.removeItem('user');
};

export const verify = async (token) => {
  const response = await fetch(`https://tripbudget-mnc8.vercel.app/api/auth/local/verify/${token}`);
  return response.json();
};

export const signToken = (payload) => {
  const token = jwt.sign(
    payload,
    process.env.TOKEN,
    { expiresIn: '1h' },
  );
  return token;
};

/* export const verifyToken = async (token) => {
  try {
    const payload = await jwt(token, process.env.TOKEN);
    return payload;
  } catch (error) {
    return null;
  }
};

export const isAuthenticated = async (req, res) => {
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
  req.user = user;

  return true;
}; */
