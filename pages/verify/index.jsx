import React from 'react';
import Head from 'next/head';

function Verify() {
  return (
    <div className="bg-white dark:bg-gray-900  grid grid-rows-3">
      <Head>
        <title>Check your email | TripBudget - Budget your trip like a pro</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto max-w-sm pt-16 pb-32 sm:static sm:px-6 lg:px-8 h-max flex flex-column justify-center items-center">
        <div className="lg:text-center">
          <p className="font-bold leading-8 tracking-tight text-gray-900 text-2xl text-center dark:text-white pt-16">
            Verification code sent. Please check your email.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Verify;
