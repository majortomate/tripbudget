/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable eqeqeq */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import TravelPhotos from '../components/TravelPhotos';
import YourExpenses from '../components/YourExpenses';
import CreateTrip from '../components/CreateTrip';
import EditProfile from '../components/EditProfile';
import ChangePassword from '../components/ChangePassword';
import YourTrips from '../components/YourTrips';
import { setGetAllTripsState } from '../features/trip/tripSlice';
import { setGetAllUsersState, selectUserStateII, setLogoutState } from '../features/auth/authSlice';
import { setGetAlluploadTravelsState } from '../features/upload/uploadTravelsSlice';
import { logout } from '../server/auth/local/auth.service';

function Profile({ data, user, photos }) {
  const router = useRouter();
  const [, setProfile] = useState(null);
  const [showcreateTrip, setshowCreateTrip] = useState(false);
  const [showYourTrips, setShowYourTrips] = useState(true);
  const [showYourExpenses, setShowYourExpenses] = useState(false);
  const [showTravelPhotos, setshowTravelPhotos] = useState(false);
  const [showEditProfile, setshowEditProfile] = useState(false);
  const [showChangePassword, setshowChangePassword] = useState(false);
  const dispatch = useDispatch();

  const selectUser = useSelector(selectUserStateII);

  useEffect(() => {
    dispatch(setGetAllTripsState(data));
    dispatch(setGetAllUsersState(user));
    dispatch(setGetAlluploadTravelsState(photos));
  }, [data, user, photos, dispatch]);
  const handleClick = (e) => {
    if (e.target.parentElement.id == 'createTrip') {
      return (
        setshowCreateTrip(true),
        setShowYourTrips(false),
        setShowYourExpenses(false),
        setshowTravelPhotos(false),
        setshowEditProfile(false),
        setshowChangePassword(false)
      );
    }
    if (e.target.parentElement.id == 'yourTrips') {
      return (
        setshowCreateTrip(false),
        setShowYourTrips(true),
        setShowYourExpenses(false),
        setshowTravelPhotos(false),
        setshowEditProfile(false),
        setshowChangePassword(false)
      );
    }
    if (e.target.parentElement.id == 'yourExpenses') {
      return (
        setshowCreateTrip(false),
        setShowYourTrips(false),
        setShowYourExpenses(true),
        setshowTravelPhotos(false),
        setshowEditProfile(false),
        setshowChangePassword(false)
      );
    }
    if (e.target.parentElement.id == 'travelPhotos') {
      return (
        setshowCreateTrip(false),
        setShowYourTrips(false),
        setShowYourExpenses(false),
        setshowTravelPhotos(true),
        setshowEditProfile(false),
        setshowChangePassword(false)
      );
    }
    if (e.target.parentElement.id == 'editProfile') {
      return (
        setshowCreateTrip(false),
        setShowYourTrips(false),
        setShowYourExpenses(false),
        setshowTravelPhotos(false),
        setshowEditProfile(true),
        setshowChangePassword(false)
      );
    }
    if (e.target.parentElement.id == 'changePassword') {
      return (
        setshowCreateTrip(false),
        setShowYourTrips(false),
        setShowYourExpenses(false),
        setshowTravelPhotos(false),
        setshowEditProfile(false),
        setshowChangePassword(true)
      );
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
    // Perform localStorage action
      const item = localStorage.getItem('user');
      const converted = JSON.parse(item);
      setProfile(converted);
    }
  }, []);

  const handleLogout = async () => {
    if (!selectUser) {
      await logout();
      dispatch(setLogoutState());
      window.location.assign('/');
    }
    await logout();
    dispatch(setLogoutState());
    router.push('/');
  };

  return (
    <div className="dark:bg-gray-900 relative gap-6">
      <Head>
        <title>Profile | TripBudget - Budget your trip like a pro</title>
        <meta name="description" content="Profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex md:flex-row  flex-col justify-between py-12 mx-auto max-w-screen-2xl h-full">
        <aside className="w-64" aria-label="Sidebar">
          <div className="overflow-y-auto py-4 px-3 bg-gray-100 rounded-md shadow dark:bg-gray-800">
            <div className="flex items-center pl-2.5 mb-5">
              {/* <img src={selectUser ? selectUser.filter((userMatch) => userMatch._id === profile?.profile._id).map((found) => found.avatar) : null} className="mr-3 h-6 sm:h-7 rounded-full" alt="Profile Logo" /> */}
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Welcome!</span>
            </div>
            <ul className="space-y-2">
              <li>
                <a onClick={handleClick} href="#" id="createTrip" className={showcreateTrip ? 'dark:bg-gray-700 bg-gray-200  flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700' : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-directions flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 21v-4" />
                    <path d="M12 13v-4" />
                    <path d="M12 5v-2" />
                    <path d="M10 21h4" />
                    <path d="M8 5v4h11l2 -2l-2 -2z" />
                    <path d="M14 13v4h-8l-2 -2l2 -2z" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Create a Trip</span>
                </a>
              </li>
              <li>
                <a onClick={handleClick} href="#" id="yourTrips" className={showYourTrips ? 'dark:bg-gray-700 bg-gray-200  flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700' : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-2 flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="18" y1="6" x2="18" y2="6.01" />
                    <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
                    <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
                    <line x1="9" y1="4" x2="9" y2="17" />
                    <line x1="15" y1="15" x2="15" y2="20" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Your Trips</span>
                  {/*                   <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">{data?.trips?.filter((trip) => trip.user === profile?.profile?._id).length}</span> */}
                </a>
              </li>
              <li>
                <a onClick={handleClick} href="#" id="yourExpenses" className={showYourExpenses ? 'dark:bg-gray-700 bg-gray-200  flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700' : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calculator flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <rect x="8" y="7" width="8" height="3" rx="1" />
                    <line x1="8" y1="14" x2="8" y2="14.01" />
                    <line x1="12" y1="14" x2="12" y2="14.01" />
                    <line x1="16" y1="14" x2="16" y2="14.01" />
                    <line x1="8" y1="17" x2="8" y2="17.01" />
                    <line x1="12" y1="17" x2="12" y2="17.01" />
                    <line x1="16" y1="17" x2="16" y2="17.01" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Your Expenses</span>
                </a>
              </li>
              <li>
                <a onClick={handleClick} href="#" id="travelPhotos" className={showTravelPhotos ? 'dark:bg-gray-700 bg-gray-200  flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700' : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-photo flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="15" y1="8" x2="15.01" y2="8" />
                    <rect x="4" y="4" width="16" height="16" rx="3" />
                    <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                    <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Travel Photos</span>
                  <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">New</span>
                </a>
              </li>
              <li>
                <a onClick={handleClick} href="#" id="editProfile" className={showEditProfile ? 'dark:bg-gray-700 bg-gray-200  flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700' : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}>
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                  <span className="ml-3">Edit your Info</span>
                </a>
              </li>
              <li>
                <a onClick={handleClick} href="#" id="changePassword" className={showChangePassword ? 'dark:bg-gray-700 bg-gray-200  flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700' : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock-open flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <circle cx="12" cy="16" r="1" />
                    <path d="M8 11v-5a4 4 0 0 1 8 0" />
                  </svg>
                  <button type="button" className="flex-1 ml-3 whitespace-nowrap">Change Your Password</button>
                </a>
              </li>
              <li>
                <a onClick={handleLogout} href="#" id="logout" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <main className="mainPanel w-full md:px-14 px-6">
          {showcreateTrip && <CreateTrip />}
          {showYourTrips && <YourTrips />}
          {showYourExpenses && <YourExpenses />}
          {showTravelPhotos && <TravelPhotos />}
          {showEditProfile && <EditProfile />}
          {showChangePassword && <ChangePassword />}
        </main>
      </div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const [tripRes, userRes, photosRes] = await Promise.all([
    fetch('http://localhost:3000/api/trip'),
    fetch('http://localhost:3000/api/user'),
    fetch('http://localhost:3000/api/travelPhotos'),
  ]);
  const [trips, user, photos] = await Promise.all([
    tripRes.json(),
    userRes.json(),
    photosRes.json(),
  ]);
  return {
    props: {
      data: trips,
      user,
      photos,
    },
  };
}
export default Profile;
