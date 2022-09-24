import TravelPhotos from './travelPhotos.model';

export const getSingleTravelPhotos = (id) => TravelPhotos.findById(id);

export const findOneTravelPhotos = (query) => TravelPhotos.findOne(query);

export const updateTravelPhotos = (id, user) => TravelPhotos.findByIdAndUpdate(id, user, { new: true });

export const deleteTravelPhotos = (id) => TravelPhotos.findByIdAndRemove(id);
