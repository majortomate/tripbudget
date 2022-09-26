/* eslint-disable react/jsx-no-useless-fragment */
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import setTime from '../../services/toLocalString';
import { selectAllTripsUserState, setSingleDeleteTripState } from '../../features/trip/tripSlice';

function YourTrips() {
  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();
  const allTripsCurrentUser = useSelector(selectAllTripsUserState);

  const handleDelete = async (key) => {
    await axios.delete(`https://tripbudget-mnc8.vercel.app/api/trip/${key}`);
    dispatch(setSingleDeleteTripState(key));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('user');
      const converted = JSON.parse(item);
      setProfile(converted);
    }
  }, []);
  return (
    <div className="grid grid-rows-2">
      <div className="shadow overflow-hidden rounded md:rounded-lg space-y-6 bg-gray-50 px-4 py-5 sm:p-6 dark:bg-gray-800">
        <div>
          <h1 className="font text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Your Trips
          </h1>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-300">
            Here it is all the trips you've created:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          {allTripsCurrentUser ? allTripsCurrentUser?.trips?.filter((trip) => trip.user._id === profile?.profile?._id).map((singleTrip) => (
            <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={singleTrip._id}>
              <div className="flex flex-col items-center px-4 py-4 relative">
                <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://res.cloudinary.com/knowhere/image/upload/v1663519099/static/imagePlaceholder_qs1zkr.jpg" alt="avatar" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{singleTrip.tripName}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {' '}
                  {setTime(singleTrip.tripDateFrom)}
                  {' '}
                  to
                  {' '}
                  {setTime(singleTrip.tripDateTo)}
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <NextLink href={`https://tripbudget-mnc8.vercel.app/trips/${singleTrip._id}`} passHref>
                    <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">See details</a>
                  </NextLink>
                  <button onClick={() => handleDelete(singleTrip._id)} type="button" href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash mr-2" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )) : null}
        </div>
      </div>
    </div>
  );
}

export default YourTrips;
