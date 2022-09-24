/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable eqeqeq */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import NextLink from 'next/link';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import TableTrip from '../../components/TableTrip';
import { setGetSingleTripState, selectSingleTripState, setDeleteDestinationTripPage } from '../../features/trip/tripSlice';
import setTime from '../services/toLocalString';
import { totalByDestination, daysBetweenDates } from '../services/calculateBudgets';

function SingleTripPage({ data }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { trip } = router.query;
  const currentTrip = useSelector(selectSingleTripState);
  const handleDelete = async (key) => {
    await axios.delete(`http://localhost:3000/api/destination/${key}`);
    dispatch(setDeleteDestinationTripPage(key));
  };

  useEffect(() => {
    const fetchSingleTripData = async () => {
      const response = await axios(`http://localhost:3000/api/trip/${trip}`);
      dispatch(setGetSingleTripState(response.data));
    };

    fetchSingleTripData();
  }, [trip, dispatch]);

  return (
    <div className="dark:bg-gray-900 relative gap-6 grid grid-rows-2">
      {data
        ? (
          <>
            <Head>
              <title>
                {data.tripName}
                {' '}
                - Budget your trip like a pro
              </title>
              <meta name="description" content="Profile page" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex md:flex-row  flex-col justify-between py-12 mx-auto max-w-screen-2xl h-full">
              <aside className="mr-20 w-96">
                <div className="overflow-y-auto py-4 px-3 bg-gray-100 rounded-md shadow dark:bg-gray-800">
                  <div className="flex items-center pl-2.5 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-square flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <polyline points="11 12 12 12 12 16 13 16" />
                    </svg>
                    <h2 className="self-center ml-3 text-xl font-semibold dark:text-white text-gray-600">Your Trip info</h2>
                  </div>
                  <h3 className="self-center ml-3 text-lg font-normal dark:text-white text-gray-600">
                    <strong>Trip Name:</strong>
                    <br />
                    {data.tripName}
                  </h3>
                  <h3 className="self-center ml-3 text-lg font-normal dark:text-white text-gray-600">
                    <strong>Dates:</strong>
                    <br />
                    {setTime(data.tripDateFrom)}
                    {' '}
                    to
                    {' '}
                    {setTime(data.tripDateTo)}
                  </h3>
                  <h3 className="self-center ml-3 text-lg font-normal dark:text-white text-gray-600">
                    <strong>Total Days:</strong>
                    <br />
                    { `${daysBetweenDates(new Date(data.tripDateFrom), new Date(data.tripDateTo))} days`}
                  </h3>
                  <h3 className="self-center ml-3 text-lg font-normal dark:text-white text-gray-600">
                    <strong>Group Size:</strong>
                    <br />
                    {data.groupSize}
                  </h3>
                  <h3 className="self-center ml-3 text-lg font-normal dark:text-white text-gray-600">
                    <strong>Daily Average Budget:</strong>
                    <br />
                    <span className="text-green-700 dark:text-green-600 font-bold">
                      $
                      {currentTrip?.destinations ? (currentTrip?.destinations?.reduce((acc, prev) => acc + (totalByDestination(prev) / currentTrip.destinations.length), 0)).toLocaleString() : null}
                    </span>

                  </h3>
                  <h3 className="self-center ml-3 text-lg font-normal dark:text-white text-gray-600">
                    <strong>Total Trip Budget:</strong>
                    <br />
                    <span className="text-green-700 dark:text-green-600 font-bold">
                      $
                      {currentTrip?.destinations ? (currentTrip?.destinations?.reduce((acc, prev) => acc + totalByDestination(prev), 0)).toLocaleString() : null}
                    </span>

                  </h3>
                  <ul className="space-y-2">
                    <NextLink href="/profile" passHref>
                      <a href="#" id="logout" className="flex items-center text-white dark:text-black bg-blue-700 rounded-lg hover:bg-blue-800 dark:hover:opacity-90 dark:bg-tripbudget-yellow p-2 text-base font-normal dark:hover:bg-tripbudget-yellow mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back-up" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Back to Trips</span>
                      </a>
                    </NextLink>
                    <li />
                  </ul>
                </div>
              </aside>
              <main className="mainPanel w-full md:px-14 px-6 shadow overflow-hidden rounded md:rounded-lg space-y-6 bg-gray-50 py-5 sm:p-6 dark:bg-gray-800">
                <h2 className="self-center ml-3 text-xl font-semibold dark:text-white text-gray-600">Your Destinations</h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-3 w-full my-5 justify-items-center">
                  {currentTrip ? currentTrip?.destinations?.map((destination) => (
                    <div className="p-5 w-full col-span-1 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={destination._id}>
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
                          <span className="text-lg text-green-700 dark:text-green-600 font-bold">
                            $
                            {totalByDestination(destination)}
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
                <TableTrip currentTrip={currentTrip} data={data} />
              </main>
            </div>
          </>
        ) : null}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const { trip } = context.params;
  // Fetch data from external API
  const response = await fetch(`http://localhost:3000/api/trip/${trip}`);
  const data = await response.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default SingleTripPage;
