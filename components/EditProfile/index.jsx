/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function EditProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [imagePublicId, setImagePublicId] = useState('');
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('user');
      const converted = JSON.parse(item);
      setProfile(converted);
    }

    const getUser = async () => {
      const id = profile?.profile._id;
      const response = await axios(`https://tripbudget-mnc8.vercel.app/api/user/${id}`);
      setCurrentUser(response.data);
    };

    getUser();
  }, [profile?.profile._id]);

  const openWidgetCloudinary = () => {
    // create the widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'knowhere',
        uploadPreset: 'h5kqu8rm',
        folder: 'thumbnails',
        maxImageFileSize: 3000000,
        maxImageWidth: 1000,
        sources: ['local', 'url', 'image_search'],
      },
      (error, result) => {
        if (
          result.event === 'success'
          && result.info.resource_type === 'image'
        ) {
          setImagePublicId(result.info.url);
        }
      },
    );
    widget.open(); // open up the widget after creation
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...form,
      avatar: imagePublicId || currentUser.avatar,
    };
    const id = profile?.profile._id;
    setLoading(true);
    await axios.patch(`https://tripbudget-mnc8.vercel.app/api/user/${id}`, data);
    setForm({});
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <div className="grid grid-rows-2">
      <Head>
        <script
          src="https://widget.Cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
          async
        />
      </Head>

      <div className="mt-5 md:col-span-2 md:mt-0">
        <form onSubmit={handleSubmit}>
          <div className="shadow overflow-hidden rounded md:rounded-lg">
            <div className="space-y-6 bg-gray-50 px-4 py-5 sm:p-6 dark:bg-gray-800">
              <div>
                <h1 className="font text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Edit your personal information
                </h1>
                <p className="mt-4 text-base text-gray-500 dark:text-gray-300">
                  Edit all your personal info here. You can't change email and username. 🤗
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="mb-6">
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your first name</label>
                  <input onChange={handleChange} type="text" name="firstName" id="firstName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" defaultValue={currentUser ? currentUser.firstName : null} required />
                </div>
                <div className="mb-6">
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your lastname</label>
                  <input onChange={handleChange} type="text" name="lastName" id="lastName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" defaultValue={currentUser ? currentUser.lastName : null} required />
                </div>
                <div className="mb-6">
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                  <input type="text" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" disabled placeholder="Majortomate" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="mb-6">
                  <label htmlFor="basedCountry" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Based Country</label>
                  <input onChange={handleChange} name="basedCountry" type="text" id="basedCountry" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required defaultValue={currentUser ? currentUser.basedCountry : null} />
                </div>
                <div className="mb-6">
                  <label htmlFor="currentCountry" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Current Country</label>
                  <input onChange={handleChange} name="currentCountry" type="text" id="currentCountry" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required defaultValue={currentUser ? currentUser.currentCountry : null} />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" disabled placeholder="cajaberu18@gmail.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="col-span-2">
                  <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">About</label>
                  <div className="mt-1">
                    <textarea
                      onChange={handleChange}
                      id="bio"
                      name="bio"
                      rows={1}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Tell us how great you are :D"
                      required
                      defaultValue={currentUser ? currentUser.bio : null}
                    />
                  </div>
                  <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Brief description for your profile.</p>
                </div>
                <div className="col-span-1">
                  <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Website or blog</label>
                  <input onChange={handleChange} name="website" type="text" id="website" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required defaultValue={currentUser ? currentUser.website : null} />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Photo</label>
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <img src={imagePublicId || currentUser?.avatar} className=" rounded-full" alt="Profile Logo" />
                  </span>
                  <button onClick={openWidgetCloudinary} type="button" className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    {!imagePublicId ? 'Upload a photo' : 'Photo selected'}
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 text-right sm:px-6">
              {!loading
                ? (
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save

                  </button>
                )
                : (
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg>
                    Saving

                  </button>
                )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
