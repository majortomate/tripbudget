/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function WelcomeDashboard() {
  return (
    <div className="flex flex-col w-full">
      <div className="shadow overflow-hidden rounded md:rounded-lg space-y-6 bg-gray-50 px-4 py-5 sm:p-6 dark:bg-gray-800">

        <h1 className="font text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Glad to see you here, Carlos!
        </h1>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
          This is your profile/dashboard page. Here you will be able to do many things, like, you know, BUDGET YOUR TRIP. Also, you can add your most stunning photos from your trips, add your daily expenses and more.
        </p>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
          We are more than happy to have you. See you around!🖖
        </p>
      </div>
    </div>
  );
}

export default WelcomeDashboard;
