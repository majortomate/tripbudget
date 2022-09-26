import connectDb from '../../../server/config/database';
import { getSingleTrip, updateTrip, deleteTrip } from '../../../server/trip/trip.service';
import { deleteDestination } from '../../../server/destination/destination.service';

export default async (req, res) => {
  await connectDb();
  const {
    method, body, query,
  } = req;
  switch (method) {
    case 'GET':
      const tripFound = await getSingleTrip(query.id);
      if (!tripFound) return res.status(404).json({ failed: 'Couldnt find trip' });
      try {
        return res.status(200).json(tripFound);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    case 'PATCH':
      const tripToUpdate = await getSingleTrip(query.id);
      if (!tripToUpdate) return res.status(404).json({ failed: 'Couldnt find trip' });
      try {
        const tripUpdated = await updateTrip(tripToUpdate, body);
        return res.status(200).json(tripUpdated);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    case 'DELETE':
      const tripToDelete = await getSingleTrip(query.id);
      if (!tripToDelete) return res.status(404).json({ failed: 'Couldnt find trip' });
      try {
        await Promise.all(
          tripToDelete.destinations.map(async (destination) => deleteDestination(destination._id)),
        );
        await deleteTrip(tripToDelete);
        return res.status(204).json(tripToDelete);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    default:
      return [];
  }
};
