/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import DropdownOptions from '../DropdownOptions';

function TravelPhotos() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="shadow overflow-hidden rounded md:rounded-lg space-y-6 bg-gray-50 px-4 py-5 sm:p-6 dark:bg-gray-800">
        <div>
          <h1 className="font text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Travel Photos (Places I've Been)
          </h1>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-300">
            Share to the world all the places you've visited in your trips. Feel free to add as many photos you want 🤗
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-7">
          <div className="mb-6 col-span-2">
            <label htmlFor="cityName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City Name</label>
            <input type="text" id="cityName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" placeholder="Ex: Paris, France" />
          </div>
          <div className="mb-6 col-span-2">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Short Description (optional)</label>
            <textarea placeholder="Ex: Solo, couple or any quantity" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="flex justify-evenly col-span-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Travel photo</label>
              <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-auto justify-self-center self-center">
            <button
              type="submit"
              className="-mt-20 justify-center align-middle rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add new place
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
          <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4 relative" style={{ zIndex: '1', marginBottom: '-53px' }}>
              <button onClick={handleClick} id="dropdownButton" className="inline-block text-gray-500 hover:text-gray-100 bg-gray-100 ring-3 ring-gray-200 dark:text-gray-400 hover:bg-gray-400 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
              </button>
              {openDropdown && <DropdownOptions />}

            </div>
            <div className="flex flex-col items-center pb-10 relative dark:bg-gray-700">
              <img className="rounded-t-lg" src="https://res.cloudinary.com/knowhere/image/upload/v1663521735/static/paris_kxss1w.jpg" alt="places ive been" />
              <div className="flex flex-row justify-center items-center mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin mb-auto" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="11" r="3" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Paris, France</h5>
              </div>
              <span className="text-sm mb-3 text-gray-400 dark:text-gray-400">20/09/22</span>
              <span className="text-sm text-center text-gray-600 dark:text-gray-400">It was my first time in Paris. What a wonderful place.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TravelPhotos;
