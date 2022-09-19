/* eslint-disable react/style-prop-object */
import {
  PaperAirplaneIcon, PencilSquareIcon, UserCircleIcon, GlobeEuropeAfricaIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    name: '1. Create an account and login',
    description:
      'In just a couple of clics create an account in tripbudget.io and then login. Yep, that\'s it.',
    icon: UserCircleIcon,
  },
  {
    name: '2. Create your first trip',
    description:
      'Once you logged in, go to \'Create a trip\' button. There it\'s very simple, add a trip name, the dates of your possible whole trip, how many of you are going to travel and done!',
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: '3. Add destinations to your trip',
    description:
      'Once you\'ve created your trip, now you can add as many destinations into it you want. Let\'s say you want to travel first to Paris. Add city, dates, and daily average budget you think you will spend every day there. Repeat with other destinations!',
    icon: PaperAirplaneIcon,
  },
  {
    name: '4. Add expenses to your trip',
    description:
      'Now you can easily have all the budget of your trip and you are ready to travel. Once you start your trip, you can add all the daily expenses you\'re having in every destinations. Add the end of the trip you will know how much you really spent against how much you thought you need.',
    icon: PencilSquareIcon,
  },
];

export default function HowThatWorks() {
  return (
    <div className="bg-[url('/images/trip-vector.png')] dark:bg-gray-800 bg-hero bg-no-repeat bg-contain bg-bottom sm:pb-80 pb-20 pt-32 sm:bg-contain md:bg-contain lg:bg-cover xl:bg-contain" id="howItWorks">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-xl font-bold text-tripbudget-yellow">How it works</h2>
          <p className="mt-2 text-4xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Budget your trip is this simple
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto dark:text-gray-300">
            Forget about taking notes in a tiny notebook. Just start using our wonderful application, from creating your first trip to adding as many destinations, costs and dates you want.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {steps.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-knowhere-dark-blue text-white dark:bg-tripbudget-yellow">
                    <feature.icon className="h-6 w-6 dark:text-knowhere-dark-blue" aria-hidden="true" />
                  </div>
                  <h5 className="ml-16 text-2xl font-bold leading-6 text-gray-900 dark:text-white">{feature.name}</h5>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
