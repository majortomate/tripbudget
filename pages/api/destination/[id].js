import connectDb from '../../../server/config/database';
import { getSingleDestination, updateDestination, deleteDestination } from '../../../server/destination/destination.service';

export default async (req, res) => {
  await connectDb();
  const {
    method, body, query,
  } = req;
  switch (method) {
    case 'GET':
      const destinationFound = await getSingleDestination(query.id);
      if (!destinationFound) return res.status(404).json({ failed: 'Couldnt find destination' });
      try {
        return res.status(200).json(destinationFound);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    case 'PATCH':
      const destinationToUpdate = await updateDestination(query.id);
      if (!destinationToUpdate) return res.status(404).json({ failed: 'Couldnt find destination' });
      try {
        const destinationUpdated = await updateDestination(destinationToUpdate, body);
        return res.status(200).json(destinationUpdated);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    case 'DELETE':
      const destinationToDelete = await getSingleDestination(query.id);
      if (!destinationToDelete) return res.status(404).json({ failed: 'Couldnt find destination' });
      try {
        await deleteDestination(destinationToDelete);
        return res.status(204).json({ success: 'destination deleted succesfully' });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    default:
      return [];
  }
};
