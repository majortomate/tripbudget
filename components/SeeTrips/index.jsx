import TripCard from '../TripCard';

/* eslint-disable @next/next/no-img-element */

export default function SeeTrips() {
  return (
    <div className="bg-white" id="findTrips">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:text-left">
          <h2 className="text-xl font-bold text-tripbudget-yellow">Find more trips</h2>
          <p className="mt-2 text-4xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl pb-12">
            Check what trips have created others
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="group">
            <TripCard />
          </div>
          <div className="group">
            <TripCard />
          </div>
          <div className="group">
            <TripCard />
          </div>
          <div className="group">
            <TripCard />
          </div>
        </div>
      </div>
    </div>
  );
}
