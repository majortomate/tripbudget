/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
import { getSingleTrip } from '../../../server/trip/trip.service';

export default async (req, res) => {
  const { method, body, params } = req;
  switch (method) {
    case 'GET':
      const tripFound = await getSingleTrip(params.id);
      return res.status(200).json(tripFound);
    case 'PATCH':
    case 'DELETE':
      break;
    default:
      return [];
  }
};
