/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
export default function PreFooter() {
  return (
    <div className="bg-tripbudget-yellow">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <img src="https://res.cloudinary.com/knowhere/image/upload/v1663394492/static/logo-tripbudget-alter.svg" alt="trip budget logo" className="w-40 h-40" />
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-knowhere-dark-blue">Make your first trip budget now.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-knowhere-dark-blue px-5 py-3 text-base font-medium text-white hover:bg-black"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#howItWorks"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-knowhere-dark-blue hover:bg-indigo-50"
            >
              How it works
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
