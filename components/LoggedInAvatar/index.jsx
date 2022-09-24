/* eslint-disable no-nested-ternary */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { logout } from '../../server/auth/local/auth.service';
import { setLogoutState } from '../../features/auth/authSlice';

function LoggedInAvatar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const currentUser = useSelector((state) => state.auth?.user?.profile);
  const [profile, setProfile] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    setOpenDropdown(!openDropdown);
  };
  const handleLogout = async () => {
    if (!currentUser) {
      await logout();
      dispatch(setLogoutState());
      window.location.assign('/');
    }
    await logout();
    dispatch(setLogoutState());
    router.push('/');
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
    // Perform localStorage action
      const item = localStorage.getItem('user');
      const converted = JSON.parse(item);
      setProfile(converted);
    }
  }, []);

  return (

    <>
      <div className="flex flex-row w-48 justify-evenly">
        {
  currentUser || profile ? (
    <h1 className="text-white text-md">
      Hi,
      {' '}
      {currentUser?.profile?.firstName || profile?.profile?.firstName}
    </h1>
  ) : null
         }
        <button type="button" onClick={handleClick}>
          <img id="avatarButton" className="w-10 h-10 rounded-full cursor-pointer absolute right-10 top-5" src={currentUser?.profile?.avatar || profile?.profile?.avatar} alt="User dropdown" />
        </button>

      </div>
      {openDropdown && (
      <div id="userDropdown" className="mt-10 z-10 w-44 absolute bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" style={{ inset: '50px 20px auto auto', transform: 'translate(0px, 10px)' }}>
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
          <div>{currentUser?.profile?.firstName || profile?.profile?.firstName}</div>
          <div className="font-medium truncate">{currentUser?.profile?.email || profile?.profile?.email}</div>
        </div>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
          <li>
            <NextLink href="/profile" passHref>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
            </NextLink>
          </li>
        </ul>
        <button type="button" className="py-1 w-full text-left" onClick={handleLogout}>
          <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
        </button>
      </div>
      )}
    </>

  );
}

export default LoggedInAvatar;
