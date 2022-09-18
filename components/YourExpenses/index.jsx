/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */

function YourExpenses() {
  return (
    <div className="flex flex-col w-full">
      <div className="shadow overflow-hidden rounded md:rounded-lg space-y-6 bg-gray-50 px-4 py-5 sm:p-6 dark:bg-gray-800">
        <div>
          <h1 className="font text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Your Expenses
          </h1>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-300">
            Here you will be able to add your daily expenses from your trips.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 justify-items-center">
          <h2 className="bold text-3xl">Section Under Construction 👷</h2>
          <img src="https://res.cloudinary.com/knowhere/image/upload/v1663520140/static/under-construction_mqoufz.webp" alt="under construction" className="w-96 h-auto" />
        </div>
      </div>
    </div>
  );
}

export default YourExpenses;
