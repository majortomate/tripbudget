import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import setTime from '../../services/toLocalString';
import { totalByDestination } from '../../services/calculateBudgets';
import { selectAllTripsUserState } from '../../features/trip/tripSlice';
import SocialShare from '../SocialShare';

function LandingTripCard() {
  const [, setProfile] = useState(null);
  const allTripsCurrentUser = useSelector(selectAllTripsUserState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('user');
      const converted = JSON.parse(item);
      setProfile(converted);
    }
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
      {allTripsCurrentUser ? allTripsCurrentUser?.trips?.map((singleTrip) => (
        <div className=" p-5 col-span-1 md:col-span-1 lg:col-span-1 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={singleTrip._id}>
          <div className="flex flex-col items-center">
            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://res.cloudinary.com/knowhere/image/upload/v1664142646/static/isotipo_tripbudget_bkc2f4.svg" alt="avatar" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{singleTrip.tripName}</h5>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center">
              <NextLink href={`http://localhost:3000/travelers/${singleTrip.user._id}`} passHref>
                <img className="mr-2 justify-self-end w-7 h-7 rounded-full right-10 top-5 col-span-1 cursor-pointer" src={singleTrip.user.avatar} alt="avatar" />
              </NextLink>
              <p className="text-sm text-gray-500 dark:text-gray-400 col-span-2">
                {setTime(singleTrip.createdAt)}
              </p>
            </div>
            <div className="text-sm text-black dark:text-white pt-5">
              <p>
                This trip have
                {' '}
                <strong>{singleTrip.destinations.length}</strong>
                {' '}
                destinations
              </p>
            </div>
            <div>
              <p className="text-sm text-black dark:text-white">
                Daily Average budget:
                {' '}
                <span className="text-green-700 dark:text-green-600 font-bold">
                  $
                  {(singleTrip.destinations.reduce((acc, prev) => acc + (totalByDestination(prev) / singleTrip.destinations.length), 0)).toLocaleString() }
                </span>

              </p>
            </div>
          </div>
          <div className="flex mt-4 space-x-3 md:mt-6 justify-between">
            <NextLink href={`http://localhost:3000/trips/public/${singleTrip._id}`} passHref>
              <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-knowhere-dark-blue rounded-lg hover:bg-knowhere-darker-blue dark:bg-blue-600 dark:hover:bg-blue-700">See details</a>
            </NextLink>
            <SocialShare id={singleTrip._id} />
          </div>
        </div>
      )) : null}
    </div>
  );
}

export default LandingTripCard;
