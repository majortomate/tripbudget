/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CreateDestination from '../CreateDestination';
import DropdownOptions from '../DropdownOptions';
import setTime from '../../pages/services/toLocalString';
import { selectDestinationState } from '../../features/destination/destinationSlice';

function TripCard({ currentTrip }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const currentDestinations = useSelector(selectDestinationState);

  const handleClick = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4 relative">
        <button onClick={handleClick} id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
        </button>
        {openDropdown && <DropdownOptions />}

      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 p-5 relative">
        <div className="col-span-1">
          <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
            Trip Name:
            {' '}
            <span className="text-lg font-medium text-gray-500 dark:text-gray-400">{currentTrip?.tripName}</span>
          </h3>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-400">
            Trip Dates:
            {' '}
            <span className="text-gray-500">
              {' '}
              {`From ${setTime(currentTrip?.tripDateFrom)} to ${setTime(currentTrip?.tripDateTo)}`}
            </span>
          </h3>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-400">Total daily for this trip so far: </h3>
        </div>
        <div className="col-span-3 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-5">
          <CreateDestination />
        </div>
        {currentTrip?.destinations.length > 0
          ? (
            <div>
              <button className="block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">
                Publish Trip
              </button>
            </div>
          ) : null}

      </div>
    </div>

  );
}

export default TripCard;
