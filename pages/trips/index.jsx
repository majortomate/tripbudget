import React from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { setGetAllTripsState } from '../../features/trip/tripSlice';
import LandingTripCard from '../../components/LandingTripCard';

function Trips({ allTrips }) {
  const dispatch = useDispatch();
  dispatch(setGetAllTripsState(allTrips));
  return (
    <div className="bg-white dark:bg-gray-800 grid grid-rows-2" id="findTrips">
      <Head>
        <title>All Trips | TripBudget - Budget your trip like a pro</title>
        <meta name="description" content="Budget your trip like a pro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:text-left">
          <h2 className="text-xl font-bold text-tripbudget-yellow">Find more trips</h2>
          <p className="mt-2 text-4xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl pb-12 dark:text-white">
            Check what trips have created others
          </p>
        </div>
        <div>
          <LandingTripCard />
        </div>
      </div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const response = await fetch('https://tripbudget-mnc8.vercel.app/api/trip');
  const allTrips = await response.json();

  return {
    props: {
      allTrips,
    },
  };
}

export default Trips;
