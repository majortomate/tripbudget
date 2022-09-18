/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import DropdownOptions from '../DropdownOptions';

function CreateTrip() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="shadow overflow-hidden rounded md:rounded-lg space-y-6 bg-gray-50 px-4 py-5 sm:p-6 dark:bg-gray-800">
        <div>
          <h1 className="font text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Let's Create a Trip
          </h1>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-300">
            Your very first step is to create a Trip. One trip means the whole travel you are going to do in a period of time.
          </p>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-300">
            For example, you are going to Europe alone for 8 days for your vacations. After that you can specify which destinations inside Europe you will visit so you can start creating budget for every city on a daily budget basis.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-7">
          <div className="mb-6 col-span-2">
            <label htmlFor="tripName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name your Trip</label>
            <input type="text" id="tripName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" placeholder="Ex: Vacations Trip to Europe 2022" />
          </div>
          <div className="mb-6 col-span-1">
            <label htmlFor="groupSize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Group Size</label>
            <input type="text" list="groupSize" placeholder="Ex: Solo, couple or any quantity" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <datalist id="groupSize">
              <option value="Solo"> Solo</option>
              <option value="Couple"> Couple</option>
            </datalist>
          </div>
          <div className="flex justify-evenly col-span-3">
            <div className="w-full">
              <label htmlFor="tripDateFrom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Trip Date (from)</label>
              <input id="tripDateFrom" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date start" />
            </div>
            <span className="mx-4 mt-8 text-gray-500">to</span>
            <div className="w-full">
              <label htmlFor="tripDateTo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Trip Date (to)</label>
              <input type="date" id="tripDateTo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date end" />
            </div>
          </div>
          <div className=" col-auto justify-self-center self-center">
            <button
              type="submit"
              className="justify-center align-middle rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create Trip
            </button>
          </div>
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

export default CreateTrip;
