import Destination from './destination.model';
import Trip from '../trip/trip.model';

export const getSingleDestination = (id) => Destination.findById(id).populate({ path: 'trip', model: Trip });

export const findOneDestination = (query) => Destination.findOne(query);

export const updateDestination = (id, user) => Destination.findByIdAndUpdate(id, user, { new: true });

export const deleteDestination = (id) => Destination.findByIdAndRemove(id);
