/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import TripCard from '../TripCard';
import { setCreateTripState, selectTripState } from '../../features/trip/tripSlice';

function CreateTrip() {
  const [form, setForm] = useState({});
  const [hide, setHide] = useState(false);
  const [loading, setLoading] = useState(false);
  const currentUser = useSelector((state) => state.auth?.user?.profile);
  const currentTrip = useSelector(selectTripState);
  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('user');
      const converted = JSON.parse(item);
      setProfile(converted);
    }
  }, []);

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
      user: currentUser?._id || profile?.profile._id,
    };
    setLoading(true);
    const response = await axios.post('https://tripbudget-mnc8.vercel.app/api/trip/', data);
    dispatch(setCreateTripState(response.data));
    setLoading(false);
    setHide(true);
    e.target.reset();
  };

  return (
    <div className="grid grid-rows-3">
      <div className=" shadow overflow-hidden rounded md:rounded-lg space-y-6 bg-gray-50 px-4 py-5 sm:p-6 dark:bg-gray-800">
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
        {!hide ? (
          <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-6 lg:grid-cols-7 md:grid-cols-3">
            <div className="mb-6 col-span-3 md:col-span-3 lg:col-span-2">
              <label htmlFor="tripName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name your Trip</label>
              <input onChange={handleChange} name="tripName" type="text" id="tripName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" placeholder="Ex: Vacations Trip to Europe 2022" />
            </div>
            <div className="mb-6 col-span-3 md:col-span-3 lg:col-span-1">
              <label htmlFor="groupSize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Group Size</label>
              <input onChange={handleChange} name="groupSize" type="text" list="groupSize" placeholder="Ex: Solo, couple or any quantity" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <datalist onChange={handleChange} name="groupSize" id="groupSize">
                <option value="Solo"> Solo</option>
                <option value="Couple"> Couple</option>
              </datalist>
            </div>
            <div className="flex justify-evenly md:col-span-3 col-span-3 lg:col-span-3">
              <div className="w-full">
                <label htmlFor="tripDateFrom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Trip Date (from)</label>
                <input onChange={handleChange} name="tripDateFrom" id="tripDateFrom" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date start" required />
              </div>
              <span className="mx-4 mt-8 text-gray-500">to</span>
              <div className="w-full">
                <label htmlFor="tripDateTo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Trip Date (to)</label>
                <input onChange={handleChange} name="tripDateTo" type="date" id="tripDateTo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date end" required />
              </div>
            </div>
            <div className=" col-auto justify-self-center self-center">
              {!loading ? (
                <button
                  type="submit"
                  className="justify-center align-middle rounded-md border border-transparent bg-knowhere-dark-blue hover:bg-knowhere-dark-blue dark:bg-tripbudget-yellow dark:hover:bg-tripbudget-darker-yellow dark:text-black py-2 px-4 text-sm font-medium text-white shadow-sm"
                  disabled={currentTrip && true}
                >
                  Create Trip
                </button>
              )
                : (
                  <button
                    type="submit"
                    className="justify-center align-middle rounded-md border border-transparent bg-knowhere-dark-blue hover:bg-knowhere-dark-blue dark:bg-tripbudget-yellow dark:hover:bg-tripbudget-darker-yellow dark:text-black py-2 px-4 text-sm font-medium text-white shadow-sm"
                  >
                    <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg>
                    Creating...
                  </button>
                )}
            </div>
          </form>
        ) : null}
        {currentTrip
          ? <TripCard currentTrip={currentTrip} setHide={setHide} /> : null}

      </div>
    </div>
  );
}

export default CreateTrip;
