import Destination from './destination.model';

export const getSingleDestination = (id) => Destination.findById(id).populate('trips');

export const findOneDestination = (query) => Destination.findOne(query);

export const updateDestination = (id, user) => Destination.findByIdAndUpdate(id, user, { new: true });

export const deleteDestination = (id) => Destination.findByIdAndRemove(id);
