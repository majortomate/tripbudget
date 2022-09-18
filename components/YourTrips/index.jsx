/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import DropdownOptions from '../DropdownOptions';

function YourTrips() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="shadow overflow-hidden rounded md:rounded-lg space-y-6 bg-gray-50 px-4 py-5 sm:p-6 dark:bg-gray-800">
        <div>
          <h1 className="font text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Your Trips
          </h1>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-300">
            Here it is all the trips you've created.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
          <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4 relative">
              <button onClick={handleClick} id="dropdownButton" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
              </button>
              {openDropdown && <DropdownOptions />}

            </div>
            <div className="flex flex-col items-center pb-10 relative">
              <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://res.cloudinary.com/knowhere/image/upload/v1663519099/static/imagePlaceholder_qs1zkr.jpg" alt="avatar" />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Euro Trip Vacations 2022</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">From 14/08/22 until 20/09/22</span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Destinations</a>
                <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Publish</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default YourTrips;
