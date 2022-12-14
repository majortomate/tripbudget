import User from './user.model';
import Trip from '../trip/trip.model';
import Destination from '../destination/destination.model';
import TravelPhotos from '../travelPhotos/travelPhotos.model';

export const getSingleUser = (id) => User.findById(id).populate([{ path: 'trips', model: Trip, populate: { path: 'destinations', model: Destination } }, { path: 'travels', model: TravelPhotos }]);

export const findUserByEmail = (email) => User.findOne({ email });

export const findOneUser = (query) => User.findOne(query);

export const registerUser = (user) => User.create(user);

export const updateUser = (id, user) => User.findByIdAndUpdate(id, user, { new: true });

export const deleteUser = (id) => User.findByIdAndRemove(id);

export const findUserByUsername = (username) => User.findOne({ username });
