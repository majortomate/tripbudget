import Trip from './trip.model';
import Destination from '../destination/destination.model';
import User from '../user/user.model';

export const getSingleTrip = (id) => Trip.findById(id).populate([{ path: 'destinations', model: Destination }, { path: 'user', model: User }]);

export const findOneTrip = (query) => Trip.findOne(query);

export const updateTrip = (id, user) => Trip.findByIdAndUpdate(id, user, { new: true });

export const deleteTrip = (id) => Trip.findByIdAndRemove(id);
