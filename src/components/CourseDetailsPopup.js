import React from 'react';

function CourseDetailsPopup({ isOpen, onClose, course,id, image, coursedescription, name, removeTour, enrollmentStatus, duration, schedule, instructor, location }) {
  if (!isOpen) {
    return null;
  }
 

  return (
    <div className="course-details-popup">
      <div className="popup-content">
        <h2>{course.name}</h2>
        <p>{course.coursedescription}</p>
        <h3>{instructor}</h3>
        {/* <h1 >{duration} {location}</h1> */}
        <h3></h3>

        {/* Add more details or components as needed */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CourseDetailsPopup;
