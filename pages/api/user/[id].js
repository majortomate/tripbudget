import connectDb from '../../../server/config/database';
import { getSingleUser } from '../../../server/user/user.service';

export default async (req, res) => {
  await connectDb();
  const {
    query,
  } = req;

  const userFound = await getSingleUser(query.id);
  if (!userFound) return res.status(404).json({ failed: 'Couldnt find user' });
  try {
    return res.status(200).json(userFound);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
