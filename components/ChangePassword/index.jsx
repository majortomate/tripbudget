/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';

function ChangePassword() {
  return (
    <div className="bg-white dark:bg-gray-900 h-screen align-middle items-start">
      <Head>
        <title>Change your password | TripBudget - Budget your trip like a pro</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:text-center">
        <p className="font-bold leading-8 tracking-tight text-gray-900 text-4xl text-center dark:text-white pt-16">
          Change your password
        </p>
      </div>
      <div className="mx-auto max-w-sm pt-16 pb-32 sm:static sm:px-6 lg:px-8 h-max">
        <form className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-700 p-10">
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Please, type your new password</label>
            <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="new password here" required />
          </div>
          <button type="submit" className="text-white bg-knowhere-dark-blue hover:bg-knowhere-dark-blue dark:bg-tripbudget-yellow dark:hover:bg-tripbudget-darker-yellow dark:text-black font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Change Password</button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
