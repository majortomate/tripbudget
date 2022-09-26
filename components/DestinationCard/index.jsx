/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from 'axios';
import { useDispatch } from 'react-redux';
import setTime from '../../pages/services/toLocalString';
import { setSingleDeleteDestinationState } from '../../features/destination/destinationSlice';
import { totalByDestination, daysBetweenDates } from '../../pages/services/calculateBudgets';

function DestinationCard({ currentDestinations }) {
  const dispatch = useDispatch();

  const handleDelete = async (key) => {
    await axios.delete(`http://localhost:3000/api/destination/${key}`);
    dispatch(setSingleDeleteDestinationState(key));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3 w-full my-5 justify-items-center">
      {currentDestinations ? currentDestinations.map((destination) => (
        <div className="p-5 w-full col-span-1 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={destination._id}>
          <div className="flex flex-col items-center pb-10 relative">
            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://res.cloudinary.com/knowhere/image/upload/v1663519099/static/imagePlaceholder_qs1zkr.jpg" alt="avatar" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{destination.cityName}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {`${setTime(destination.stayDateFrom)} to ${setTime(destination.stayDateTo)}`}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {' '}
              { `(${daysBetweenDates(new Date(destination.stayDateFrom), new Date(destination.stayDateTo))} days)`}
            </span>
            <div>
              <span className="text-md text-black dark:text-gray-400">
                Daily Budget:
              </span>
              <span className="text-lg text-green-700 dark:text-green-600 font-bold">
                {' '}
                $
                {totalByDestination(destination)}
              </span>
            </div>
            <div>
              <span className="text-md text-black dark:text-gray-400">
                Total Destination Budget:
              </span>
              <span className="text-lg text-green-700 dark:text-green-600 font-bold">
                {' '}
                $
                {(totalByDestination(destination) * daysBetweenDates(new Date(destination.stayDateFrom), new Date(destination.stayDateTo))).toLocaleString()}
              </span>
            </div>
            <div className="flex text-right mt-4 space-x-3 md:mt-6">
              <button onClick={() => handleDelete(destination._id)} type="button" href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-red-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-100  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
  );
}

export default DestinationCard;
