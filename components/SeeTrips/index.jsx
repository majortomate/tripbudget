import NextLink from 'next/link';
import LandingTripCard from '../LandingTripCard';

/* eslint-disable @next/next/no-img-element */

export default function SeeTrips() {
  return (
    <div className="bg-white dark:bg-gray-800" id="findTrips">
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
        <div className="flex justify-center mt-20">
          <NextLink href="http://localhost:3000/trips" passHref>
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-knowhere-dark-blue py-3 px-8 text-center font-medium dark:hover:text-white dark:text-black text-white hover:bg-knowhere-darker-blue dark:bg-tripbudget-yellow"
            >
              SEE MORE TRIPS
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  );
}
