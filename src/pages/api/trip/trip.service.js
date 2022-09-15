import Trip from './trip.model';

export const getSingleTrip = (id) => Trip.findById(id).populate('trips');

export const findOneTrip = (query) => Trip.findOne(query);

export const updateTrip = (id, user) => Trip.findByIdAndUpdate(id, user, { new: true });

export const deleteTrip = (id) => Trip.findByIdAndRemove(id);
