/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import DropdownOptions from '../DropdownOptions';
import setTime from '../../pages/services/toLocalString';

function DestinationCard({ currentDestinations }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <div className="grid grid-cols-3 gap-3 w-full my-5">
      {currentDestinations ? currentDestinations.map((destination) => (
        <div className="p-5 w-full col-span-1 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={destination._id}>
          <div className="flex justify-end relative">
            <button onClick={handleClick} id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
            </button>
            {openDropdown && <DropdownOptions />}

          </div>
          <div className="flex flex-col items-center pb-10 relative">
            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://res.cloudinary.com/knowhere/image/upload/v1663519099/static/imagePlaceholder_qs1zkr.jpg" alt="avatar" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{destination.cityName}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {`${setTime(destination.stayDateFrom)} to ${setTime(destination.stayDateTo)}`}
            </span>
            <div>
              <span className="text-md text-black dark:text-gray-400">
                Total Daily Budget:
              </span>
              <span className="text-lg text-green-700 font-bold dark:text-gray-400">
                {' '}
                $
                {destination.accomodationDailyBudget + destination.foodDailyBudget + destination.transportationDailyBudget + destination.localTransportationBudget + destination.souvenirsDailyBudget + destination.toursAndEntrancesDailyBudget + destination.othersDailyBudget}
              </span>
            </div>
          </div>
        </div>
      )) : null}
    </div>
  );
}

export default DestinationCard;
