/* eslint-disable eqeqeq */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import axios from 'axios';
import setTime from '../../services/toLocalString';
import { setCreateUploadTravelsState, selectAllPhotosState, setSingleDeleteUploadTravelState } from '../../features/upload/uploadTravelsSlice';

function TravelPhotos() {
  const [profile, setProfile] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [imagePublicId, setImagePublicId] = useState('');
  const dispatch = useDispatch();
  const currentTravelPhotos = useSelector(selectAllPhotosState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('user');
      const converted = JSON.parse(item);
      setProfile(converted);
    }
  }, []);

  const openWidgetCloudinary = () => {
    // create the widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'knowhere',
        uploadPreset: 'h5kqu8rm',
        folder: 'travelPhotos',
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

  const handleOpenModal = () => {
    setOpenModal(!openModal);
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
      image: imagePublicId,
      user: profile.profile._id,
    };
    setLoading(true);
    const response = await axios.post('https://tripbudget-mnc8.vercel.app/api/travelPhotos/', data);
    dispatch(setCreateUploadTravelsState(response.data));
    setLoading(false);
    setForm({});
    setImagePublicId(null);
    e.target.reset();
    setOpenModal(false);
  };
  const dataId = {
    id: profile?.profile._id,
  };
  const handleDelete = async (key) => {
    await axios.delete(`https://tripbudget-mnc8.vercel.app/api/travelPhotos/${key}`, dataId);
    dispatch(setSingleDeleteUploadTravelState(key));
  };

  return (
    <div className="flex flex-col w-full mt-5 md:mt-0 lg:mt-0 xl:mt-0">
      <Head>
        <script
          src="https://widget.Cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
          async
        />
      </Head>
      <div className="shadow overflow-hidden rounded md:rounded-lg space-y-6 bg-gray-50 px-4 py-5 sm:p-6 dark:bg-gray-800">
        <div>
          <h1 className="font text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Travel Photos (Places I've Been)
          </h1>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-300">
            Share to the world all the places you've visited in your trips. Feel free to add as many photos you want 🤗
          </p>
        </div>
        <button onClick={handleOpenModal} className="block text-white bg-knowhere-dark-blue hover:bg-knowhere-dark-blue dark:bg-tripbudget-yellow dark:hover:bg-tripbudget-darker-yellow dark:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
          Add a Photo
        </button>
        {openModal
&& (
<div id="defaultModal" className="overflow-y-auto overflow-x-hidden z-50 w-full h-modal md:h-full justify-center items-center">
  <div className="bg-white rounded-lg shadow dark:bg-gray-700 fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-11/12 lg:w-auto">
    <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mx-auto">
        Add a Photo
      </h3>
      <button onClick={handleOpenModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        <span className="sr-only">Close modal</span>
      </button>
    </div>
    <div className="p-6 space-y-6">
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        This is our special place for you to add as many photos you want from all your trips.
      </p>
    </div>
    <form onSubmit={handleSubmit} className="px-6 space-y-6">
      <div className="grid grid-cols-1  gap-6 md:grid-cols-1 lg:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Travel photo</label>
          <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-2 pt-2 pb-2">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <button type="button" onClick={openWidgetCloudinary} className="text-white bg-knowhere-dark-blue hover:bg-knowhere-dark-blue dark:bg-tripbudget-yellow dark:hover:bg-tripbudget-darker-yellow dark:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled={imagePublicId}>
                  {!imagePublicId ? 'Upload a photo' : 'Photo Uploaded'}
                </button>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="mb-2 col-span-2 md:col-span-1 lg:col-span-2">
            <label htmlFor="cityName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
            <input onChange={handleChange} name="cityName" type="text" id="cityName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" placeholder="Where did you take this photo?" />
          </div>
          <div className="flex justify-evenly col-span-2 lg:col-span-2 md:col-span-1">
            <div className="w-full">
              <label htmlFor="travelDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">When</label>
              <input onChange={handleChange} name="travelDate" id="travelDate" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date start" required />
            </div>
          </div>
        </div>
        <div className="mb-6 col-span-1 md:col-span-1 lg:col-span-2">
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Short description (opcional)</label>
          <textarea onChange={handleChange} name="description" id="description" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="" placeholder="Add something remarkable about this place." />
        </div>
      </div>
      <div className="flex justify-end items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
        {!loading
          ? <button type="submit" className="text-white bg-knowhere-dark-blue hover:bg-knowhere-dark-blue dark:bg-tripbudget-yellow dark:hover:bg-tripbudget-darker-yellow dark:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add</button>
          : (
            <button type="submit" className="text-white bg-knowhere-dark-blue hover:bg-knowhere-dark-blue dark:bg-tripbudget-yellow dark:hover:bg-tripbudget-darker-yellow dark:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
              </svg>
              Creating...
            </button>
          )}
        <button onClick={handleOpenModal} type="button" className="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Cancel</button>
      </div>
    </form>
  </div>
</div>
)}
        <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          {currentTravelPhotos ? currentTravelPhotos?.photos?.filter((travelPhoto) => travelPhoto.user === profile?.profile?._id).map((photo) => (
            <div className="col-span-1 md:col-span-1 lg:col-span-1 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={photo._id}>
              <div className="rounded-lgtext-center mx-auto">
                <img className="rounded-t-lg h-full" src={photo.image} alt="places ive been" />
              </div>
              <div className="pt-5 pl-10 pr-10 pb-0">
                <div className="flex flex-row justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin mb-auto dark:text-white mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="11" r="3" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                  <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{photo.cityName}</h2>
                </div>
                <h3 className="text-sm mb-3 text-center text-gray-400 dark:text-gray-400">{setTime(photo.travelDate)}</h3>
                <h3 className="text-sm text-center text-gray-600 dark:text-gray-400">{photo.description}</h3>
              </div>
              <div className="flex justify-end mb-2 mr-2 md:mt-6">
                <button onClick={() => handleDelete(photo._id)} type="button" href="#" className="inline-flex items-end py-2 px-4 text-sm font-medium text-center text-red-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-100  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          )) : null}
          { currentTravelPhotos ? currentTravelPhotos.photos.filter((user) => user._id == profile?.profile._id)
            .map((item) => item.photos
              .map((travels) => (
                <div className="col-span-1 md:col-span-1 lg:col-span-1 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={travels._id}>
                  <img className="rounded-t-lg h-1/2 text-center mx-auto" src={travels.image} alt="places ive been" />
                  <div className="pt-5 pl-10 pr-10 pb-0">
                    <div className="flex flex-row justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin mb-auto dark:text-white mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="11" r="3" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                      </svg>
                      <h2 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{travels.cityName}</h2>
                    </div>
                    <h3 className="text-sm mb-3 text-center text-gray-400 dark:text-gray-400">{setTime(travels.travelDate)}</h3>
                    <h3 className="text-sm text-center text-gray-600 dark:text-gray-400">{travels.description}</h3>
                  </div>
                  <div className="flex justify-end mb-2 mr-2 md:mt-6">
                    <button onClick={() => handleDelete(travels._id)} type="button" href="#" className="inline-flex items-end py-2 px-4 text-sm font-medium text-center text-red-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-100  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              ))) : null}
        </div>
      </div>
    </div>
  );
}

export default TravelPhotos;
