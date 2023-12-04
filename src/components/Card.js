import React, { useState } from 'react';
import CourseDetailsPopup from './CourseDetailsPopup';

function Card({ id, image, coursedescription, name, removeTour, enrollmentStatus, duration, schedule, instructor, location }) {
  const [readmore, setReadmore] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const description = readmore ? coursedescription : `${coursedescription.substring(0, 200)}...`;

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='card'>
      <div className='enrol-stat'>{enrollmentStatus}</div>
      <img src={image} className='image' alt='img'></img>

      <div className='tour-info'>
        <div className='tour-details'>
          <h4 className='tour-price'>{name} </h4>
          <h3>{instructor}</h3>
          <h1 className='tour-duration'>{duration} ({location})</h1>
        </div>

        <div className='description'>
          {description}
          {!readmore && (
            <span className='read-more' onClick={() => setReadmore(true)}>
              Read More
            </span>
          )}
          {readmore && (
            <span className='show-less' onClick={() => setReadmore(false)}>
              Show Less
            </span>
          )}
          
        </div>
      </div>
      <button className='btn-red' onClick={openPopup}>View Details</button>
      <button className='btn-red' onClick={() => removeTour(id)}>
        Not Interested
      </button>

      <CourseDetailsPopup isOpen={isPopupOpen} onClose={closePopup} course={{ id, name, coursedescription, image, removeTour, enrollmentStatus, duration, schedule, instructor, location }} />
    </div>
  );
}

export default Card;
