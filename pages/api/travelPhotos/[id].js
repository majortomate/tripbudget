import connectDb from '../../../server/config/database';
import { getSingleTravelPhotos, updateTravelPhotos, deleteTravelPhotos } from '../../../server/travelPhotos/travelPhotos.services';

export default async (req, res) => {
  await connectDb();
  const {
    method, body, query,
  } = req;
  switch (method) {
    case 'GET':
      const tripFound = await getSingleTravelPhotos(query.id);
      if (!tripFound) return res.status(404).json({ failed: 'Couldnt find trip' });
      try {
        return res.status(200).json(tripFound);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    case 'PATCH':
      const tripToUpdate = await getSingleTravelPhotos(query.id);
      if (!tripToUpdate) return res.status(404).json({ failed: 'Couldnt find trip' });
      try {
        const tripUpdated = await updateTravelPhotos(tripToUpdate, body);
        return res.status(200).json(tripUpdated);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    case 'DELETE':
      const travelPhotoToDelete = await getSingleTravelPhotos(query.id);
      if (!travelPhotoToDelete) return res.status(404).json({ failed: 'Couldnt find travel photo' });
      try {
        await deleteTravelPhotos(travelPhotoToDelete);
        return res.status(204).json(travelPhotoToDelete);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    default:
      return [];
  }
};
