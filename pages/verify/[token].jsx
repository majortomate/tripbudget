/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { verify } from '../../server/auth/local/auth.service';

function AccountVerification() {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    const verifyAccount = async () => {
      const { token: jwtoken, profile } = await verify(token);
      if (jwtoken) {
        localStorage.setItem('token', jwtoken);
        localStorage.setItem('profile', JSON.stringify(profile));
      }
    };

    verifyAccount();
  }, [token]);

  return (

    <div className="bg-white dark:bg-gray-900  grid grid-rows-2">
      <Head>
        <title>Account activated! | TripBudget - Budget your trip like a pro</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { token
        && (
          <div className=" my-20 mx-auto max-w-sm pt-16 pb-32 sm:static sm:px-6 lg:px-8 h-max flex flex-col justify-center items-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-700 p-10">
            <div className="lg:text-center">
              <p className="font-bold leading-8 tracking-tight text-gray-900 text-4xl text-center dark:text-white pt-16">
                Account Activated!
              </p>
            </div>
            <div className=" mt-10">
              <NextLink href="/login" passHref>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" href="#">Please Sign In</button>
              </NextLink>
            </div>
          </div>
        )}
    </div>
  );
}

export default AccountVerification;
