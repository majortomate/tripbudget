/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useSelector, useDispatch } from 'react-redux';
import CreateDestination from '../CreateDestination';
import DropdownOptions from '../DropdownOptions';
import setTime from '../../services/toLocalString';
import { getTotalTripDailyBudget } from '../../services/calculateBudgets';
import { setDeleteTripState } from '../../features/trip/tripSlice';
import { setDeleteDestinationState, selectDestinationState } from '../../features/destination/destinationSlice';

function TripCard({ currentTrip, setHide }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const currentDestinations = useSelector(selectDestinationState);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleCancel = async (e) => {
    e.preventDefault();

    const tripId = currentTrip._id;

    setLoading(true);
    const response = await axios.delete(`https://tripbudget-mnc8.vercel.app/api/trip/${tripId}`);
    dispatch(setDeleteTripState(response.data));
    dispatch(setDeleteDestinationState(response.data));
    setHide(false);
    setLoading(false);
  };

  const handlePublish = () => {
    swal({
      title: 'Wonderful!',
      text: 'Trip successfully published',
      icon: 'success',
    });
    setTimeout(() => {
      setHide(false);
      window.location.reload();
    }, 1500);
  };

  const handleClick = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4 relative">
        <button onClick={handleClick} id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
        </button>
        {openDropdown && <DropdownOptions setHide={setHide} />}

      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-4 p-5 relative">
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
          <span className="text-green-700 dark:text-green-600 font-bold text-lg">
            $
            {currentDestinations ? getTotalTripDailyBudget(currentDestinations) : null}
          </span>
          {currentDestinations.length > 0
            ? (
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center mt-5 md:gap-5 lg:gap-0">
                <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
                  <button onClick={handlePublish} className="text-white dark:text-black dark:hover:opacity-90 bg-blue-700 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-tripbudget-yellow inline-flex" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                      <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                    </svg>
                    Publish trip
                  </button>
                </div>
                {!loading
                  ? (
                    <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
                      <button onClick={handleCancel} className="block text-white bg-gray-600 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-400 dark:hover:bg-gray-500" type="button">
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
                      <button onClick={handleCancel} className="block text-white bg-gray-600 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-400 dark:hover:bg-gray-500" type="button">
                        <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg>
                        Canceling
                      </button>
                    </div>
                  )}
              </div>
            ) : null}
        </div>
        <div className="col-span-3 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-5">
          <CreateDestination />
        </div>
      </div>
    </div>

  );
}

export default TripCard;
