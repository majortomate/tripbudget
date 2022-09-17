/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
export default function Hero() {
  return (
    <div className="relative overflow-hidden dark:bg-gray-800" id="home">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-64 lg:pb-64">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Start bugdeting your trip like a pro
            </h1>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
              A trip could be way expensive if you don't know the costs or at least how much in reality you will like to spend. Be the master of your trip expenses and start budgeting your trip now.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://res.cloudinary.com/knowhere/image/upload/v1663302057/static/2_ih5mnp.jpg"
                          alt="Berlin"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/knowhere/image/upload/v1663302057/static/4_jjxo1l.jpg"
                          alt="London"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/knowhere/image/upload/v1663302058/static/6_xz1niv.jpg"
                          alt="Madrid"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/knowhere/image/upload/v1663302057/static/3_zzgmo6.jpg"
                          alt="Rome"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/knowhere/image/upload/v1663302058/static/7_fc6h6u.jpg"
                          alt="Amsterdam"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/knowhere/image/upload/v1663302057/static/1_nbqvic.jpg"
                          alt="Paris"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/knowhere/image/upload/v1663302057/static/5_owckwb.jpg"
                          alt="Barcelona"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-knowhere-dark-blue py-3 px-8 text-center font-medium dark:hover:text-white dark:text-black text-white hover:bg-black dark:bg-tripbudget-yellow"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
