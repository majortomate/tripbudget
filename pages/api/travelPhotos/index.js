/* eslint-disable import/no-anonymous-default-export */
import TravelPhotos from '../../../server/travelPhotos/travelPhotos.model';
import connectDb from '../../../server/config/database';
import { getSingleUser, updateUser } from '../../../server/user/user.service';

export default async (req, res) => {
  const { method, body } = req;
  await connectDb();
  switch (method) {
    case 'GET':
      try {
        const photos = await TravelPhotos.find({}).sort([['createdAt', -1]]);
        return res.status(200).json({ photos });
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case 'POST':
      const { user } = body;
      const userFound = await getSingleUser(user);
      try {
        const newTravelPhoto = new TravelPhotos(body);
        const savedTravelPhoto = await newTravelPhoto.save();

        await updateUser(userFound, {
          $push: { travels: savedTravelPhoto._id },
        });
        return res.status(201).json(savedTravelPhoto);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }

    default:
      return [];
  }
};
