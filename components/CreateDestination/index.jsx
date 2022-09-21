/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setCreateDestinationState, selectDestinationState } from '../../features/destination/destinationSlice';
import { selectTripState } from '../../features/trip/tripSlice';
import DestinationCard from '../DestinationCard';

function CreateDestination() {
  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const currentTrip = useSelector(selectTripState);
  const currentDestinations = useSelector(selectDestinationState);
  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('user');
      const converted = JSON.parse(item);
      setProfile(converted);
    }
  }, []);

  const handleClick = () => {
    setOpenModal(!openModal);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...form,
      trip: currentTrip._id,
    };
    setLoading(true);
    const response = await axios.post('http://localhost:3000/api/destination/', data);
    dispatch(setCreateDestinationState(response.data));
    setLoading(false);
    e.target.reset();
    setOpenModal(false);
  };
  return (
    <>

      <button onClick={handleClick} className="block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 " type="button">
        Add a Destination
      </button>
      <div>
        <DestinationCard currentDestinations={currentDestinations} />
      </div>
      {openModal
    && (
    <div id="defaultModal" className="overflow-y-auto overflow-x-hidden z-50 w-full h-modal md:h-full justify-center items-center">
      <div className="bg-white rounded-lg shadow dark:bg-gray-700 fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Add a Destination
          </h3>
          <button onClick={handleClick} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Now that you have your trip set it's time for start adding destinations to it. Add as many as you want and make sure to add all the daily budget you think you will spend on every destination.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <h3 className="dark:text-white text-md font-semibold text-black">Add the city or town and the dates you will stay there: </h3>
          <div className="grid grid-cols-1  gap-6 md:grid-cols-1 lg:grid-cols-3">
            <div className="mb-6 col-span-1 md:col-span-1">
              <label htmlFor="cityName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
              <input onChange={handleChange} name="cityName" type="text" id="tripName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" placeholder="Type a city" />
            </div>
            <div className="flex justify-evenly col-span-1 lg:col-span-2 md:col-span-1">
              <div className="w-full">
                <label htmlFor="stayDateFrom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stay Date (from)</label>
                <input onChange={handleChange} name="stayDateFrom" id="tripDateFrom" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date start" />
              </div>
              <span className="mx-4 mt-8 text-gray-500">to</span>
              <div className="w-full">
                <label htmlFor="stayDateTo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stay Date (to)</label>
                <input onChange={handleChange} name="stayDateTo" type="date" id="tripDateTo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date end" />
              </div>
            </div>
          </div>
          <h3 className="dark:text-white text-md font-semibold text-black">Add every budget you consider you will spend DAILY in this destination:</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="mb-6 col-span-1">
              <label htmlFor="accomodationDailyBudget" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accommodation</label>
              <input onChange={handleChange} name="accomodationDailyBudget" type="number" id="accomodationDailyBudget" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Hotel, hostal, airBnb..." />
            </div>
            <div className="mb-6 col-span-1">
              <label htmlFor="foodDailyBudget" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Food</label>
              <input onChange={handleChange} name="foodDailyBudget" type="number" id="foodDailyBudget" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Breakfast, lunch, dinner..." />
            </div>
            <div className="mb-6 col-span-1">
              <label htmlFor="transportationDailyBudget" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Transport (add as a budget per total days)</label>
              <input onChange={handleChange} name="transportationDailyBudget" type="number" id="transportationDailyBudget" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Flight, train, etc to destination" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="mb-6 col-span-1">
              <label htmlFor="localTransportationBudget" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Local Transport</label>
              <input onChange={handleChange} name="localTransportationBudget" type="number" id="localTransportationBudget" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Metro, bus, taxi..." />
            </div>
            <div className="mb-6 col-span-1">
              <label htmlFor="souvenirsDailyBudget" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Souvenirs</label>
              <input onChange={handleChange} name="souvenirsDailyBudget" type="number" id="souvenirsDailyBudget" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Gifts for family and friends" />
            </div>
            <div className="mb-6 col-span-1">
              <label htmlFor="toursAndEntrancesDailyBudget" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tours and Entrance tickets</label>
              <input onChange={handleChange} name="toursAndEntrancesDailyBudget" type="number" id="toursAndEntrancesDailyBudget" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Museums, city tours..." />
            </div>
            <div className="mb-6 col-span-1">
              <label htmlFor="othersDailyBudget" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">For Fun</label>
              <input onChange={handleChange} name="othersDailyBudget" type="number" id="othersDailyBudget" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Beers, street food, shopping..." />
            </div>
          </div>
          <div className="flex justify-end items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            {!loading
              ? <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Add</button>
              : (
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ">
                  <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                  </svg>
                  Creating...
                </button>
              )}
            <button onClick={handleClick} type="button" className="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Cancel</button>
          </div>
        </form>

      </div>
    </div>
    )}

    </>
  );
}

export default CreateDestination;

/*  <div className="mb-6 col-span-1">
    <label htmlFor="groupSize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Group Size</label>
    <input onChange={handleChange} name="groupSize" type="text" list="groupSize" placeholder="Ex: Solo, couple or any quantity" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    <datalist onChange={handleChange} name="groupSize" id="groupSize">
      <option value="Solo"> Solo</option>
      <option value="Couple"> Couple</option>
    </datalist>
  </div>; */
