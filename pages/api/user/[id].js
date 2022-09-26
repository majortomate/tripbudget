import connectDb from '../../../server/config/database';
import { getSingleUser, updateUser } from '../../../server/user/user.service';

export default async (req, res) => {
  await connectDb();
  const {
    method,
    query,
    body,
  } = req;

  switch (method) {
    case 'GET':
      const userFound = await getSingleUser(query.id);
      if (!userFound) return res.status(404).json({ failed: 'Couldnt find user' });
      try {
        return res.status(200).json(userFound);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    case 'PATCH':
      const userToUpdate = await getSingleUser(query.id);
      if (!userToUpdate) return res.status(404).json({ failed: 'Couldnt find user' });
      try {
        const userUpdated = await updateUser(userToUpdate, body);
        return res.status(200).json(userUpdated);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    default:
      return [];
  }
};
