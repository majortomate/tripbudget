/* eslint-disable no-underscore-dangle */
import React from 'react';

function SocialShare({ id }) {
  const tripUrl = `https://tripbudget-mnc8.vercel.app/trips/public/${id}`;

  return (
    <div className="grid grid-cols-4 justify-items-stretch content-center gap-1">
      <div>
        <a href={`http://www.facebook.com/sharer.php?u=${tripUrl}`} target="_blank" rel="noreferrer">
          <img className="w-6" src="https://res.cloudinary.com/knowhere/image/upload/v1664139767/static/facebook_qyytnq.png" alt="" />
          {' '}
        </a>
      </div>
      <div>
        <a href={`https://twitter.com/intent/tweet?text=Check out this trip! ${tripUrl}`} target="_blank" rel="noreferrer">
          <img className="w-6" src="https://res.cloudinary.com/knowhere/image/upload/v1664139767/static/twitter_vhjvbe.png" alt="" />
          {' '}
        </a>
      </div>
      <div>
        <a href={`https://api.whatsapp.com/send?text=Check out this trip! ${tripUrl}`} target="_blank" rel="noreferrer">
          <img className="w-6" src="https://res.cloudinary.com/knowhere/image/upload/v1664139767/static/whatsapp_uhobee.png" alt="" />
          {' '}
        </a>
      </div>
      <div>
        <a href={`mailto:?Subject=Check out this trip! &body=${tripUrl}`} target="_blank" rel="noreferrer">
          <img className="w-6" src="https://res.cloudinary.com/knowhere/image/upload/v1664139767/static/email_bm2ljs.png" alt="" />
          {' '}
        </a>
      </div>
    </div>
  );
}

export default SocialShare;
