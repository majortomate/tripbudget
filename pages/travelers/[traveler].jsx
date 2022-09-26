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
import { useDispatch } from 'react-redux';
import { setSingleUserState } from '../../features/auth/authSlice';
import setTime from '../../services/toLocalString';
import { totalByDestination } from '../../services/calculateBudgets';

function SingleTravelerPage({ data }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { traveler } = router.query;

  useEffect(() => {
    const fetchSingleUserData = async () => {
      const response = await axios(`http://localhost:3000/api/user/${traveler}`);
      dispatch(setSingleUserState(response.data));
    };

    fetchSingleUserData();
  }, [traveler, dispatch]);

  return (
    <div className="dark:bg-gray-900 relative gap-6">
      {data
        ? (
          <>
            <Head>
              <title>
                {data.username}
                {' '}
                - Budget your trip like a pro
              </title>
              <meta name="description" content="Profile page" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex md:flex-row  flex-col justify-between py-12 mx-auto max-w-screen-2xl h-full">
              <aside className="mr-20 w-96">
                <div className=" overflow-y-auto py-4 px-3 bg-gray-100 rounded-md shadow dark:bg-gray-800">
                  <div className="flex items-center pl-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle dark:text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="10" r="3" />
                      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                    <h2 className="self-center ml-3 text-xl font-semibold dark:text-white text-gray-600">Trip Author</h2>
                  </div>
                  <div className="flex justify-center py-3">
                    <img className="mr-2 w-24 h-24 rounded-full col-span-1" src={data.avatar} alt="avatar" />
                  </div>
                  <div>
                    <h3 className="m-0 self-center ml-3 text-lg font-normal dark:text-white text-gray-600">
                      {data.firstName}
                      {' '}
                      {data.lastName}
                      {' '}
                      (
                      {data.username}
                      )

                    </h3>
                    <p className="self-center italic ml-3 text-md font-normal dark:text-white text-gray-600">
                      "
                      {data.bio}
                      "
                    </p>
                    <h3 className="self-center ml-3 text-lg font-normal dark:text-white text-gray-600">
                      <div className="flex items-center mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-check mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          <path d="M16 11l2 2l4 -4" />
                        </svg>
                        <strong>Member since:</strong>
                      </div>
                      <p className="ml-8">
                        {' '}
                        {setTime(data.createdAt)}
                      </p>
                    </h3>
                    <h3 className="self-center ml-3 text-lg font-normal dark:text-white text-gray-600">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="11" r="3" />
                          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        <strong>Based country:</strong>
                      </div>
                      <p className="ml-8">
                        {data.basedCountry}
                      </p>
                    </h3>
                    <h3 className="self-center ml-3 text-lg font-normal dark:text-white text-gray-600">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-2 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="18" y1="6" x2="18" y2="6.01" />
                          <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
                          <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
                          <line x1="9" y1="4" x2="9" y2="17" />
                          <line x1="15" y1="15" x2="15" y2="20" />
                        </svg>
                        <strong>Current country:</strong>
                      </div>
                      <p className="ml-8">
                        {data.currentCountry}
                      </p>
                    </h3>
                    <h3 className="self-center ml-3 text-lg font-normal dark:text-white text-gray-600">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-app-window mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="M6 8h.01" />
                          <path d="M9 8h.01" />
                        </svg>
                        <strong>Website:</strong>
                      </div>
                      <a href={data.website} className="ml-8 text-blue-700 underline dark:text-tripbudget-yellow" target="_blank" rel="noreferrer">
                        {data.website}
                      </a>

                    </h3>
                    <ul className="space-y-2">
                      <a href="#" onClick={() => router.back()} id="logout" className="flex items-center text-white dark:text-black bg-knowhere-dark-blue rounded-lg hover:bg-knowhere-darker-blue dark:hover:opacity-90 dark:bg-tripbudget-yellow p-2 text-base font-normal dark:hover:bg-tripbudget-yellow mt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back-up" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Back to previous page</span>
                      </a>
                      <li />
                    </ul>
                  </div>
                </div>
              </aside>
              <main className="mainPanel w-full md:px-14 px-6 shadow rounded md:rounded-lg space-y-8 bg-gray-50 py-20 sm:p-6 dark:bg-gray-800">
                <h2 className="self-center ml-3 text-xl font-semibold dark:text-white text-gray-600">Travel Photos</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-1 gap-3 w-full my-5 justify-items-center">
                  {data ? data.travels.map((photo) => (
                    <div className="col-span-1 md:col-span-1 lg:col-span-1 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={photo._id}>
                      <img className="rounded-t-lg h-1/2 text-center mx-auto" src={photo.image} alt="places ive been" />
                      <div className="pt-5 pl-10 pr-10 pb-0">
                        <div className="flex flex-row justify-center items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin mb-auto dark:text-white mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="11" r="3" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                          </svg>
                          <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{photo.cityName}</h2>
                        </div>
                        <h3 className="text-sm mb-3 text-center text-gray-400 dark:text-gray-400">{setTime(photo.travelDate)}</h3>
                        <h3 className="text-sm text-center text-gray-600 dark:text-gray-400">{photo.description}</h3>
                      </div>
                    </div>
                  )) : null}
                </div>
                <h2 className="self-center ml-3 text-xl font-semibold dark:text-white text-gray-600">Trips</h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-3 w-full my-5 justify-items-center">
                  {data ? data.trips.map((trip) => (
                    <div className="p-5 w-full col-span-1 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={trip._id}>
                      <div className="flex flex-col items-center pb-10 relative">
                        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://res.cloudinary.com/knowhere/image/upload/v1663519099/static/imagePlaceholder_qs1zkr.jpg" alt="avatar" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{trip.tripName}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {`${setTime(trip.tripDateFrom)} to ${setTime(trip.tripDateTo)}`}
                        </span>
                        <div className="text-sm text-black dark:text-white pt-5">
                          <p>
                            This trip have
                            {' '}
                            <strong>{trip.destinations.length}</strong>
                            {' '}
                            destinations
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-black dark:text-white">
                            Daily Average budget:
                            {' '}
                            <span className="text-green-700 dark:text-green-600 font-bold">
                              $
                              {(trip.destinations.reduce((acc, prev) => acc + (totalByDestination(prev) / trip.destinations.length), 0)).toLocaleString() }
                            </span>

                          </p>
                        </div>
                        <div className="flex mt-4 space-x-3 md:mt-6 justify-between">
                          <NextLink href={`http://localhost:3000/trips/public/${trip._id}`} passHref>
                            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-knowhere-dark-blue rounded-lg hover:bg-knowhere-darker-blue dark:bg-blue-600 dark:hover:bg-blue-700">See details</a>
                          </NextLink>
                        </div>
                      </div>
                    </div>
                  )) : null}
                </div>
              </main>
            </div>
          </>
        ) : null}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const { traveler } = context.params;
  // Fetch data from external API
  const response = await fetch(`http://localhost:3000/api/user/${traveler}`);
  const data = await response.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default SingleTravelerPage;
