import React, { useState } from 'react';

function CourseDetailsPopup({ isOpen, onClose, course,id, image, coursedescription, name, removeTour, enrollmentStatus, duration, schedule, instructor, location }) {
  if (!isOpen) {
    return null;
  }

  function syllabusHandler(){
    return true
  }

  return (
    <div className="course-details-popup">
      <div className="popup-content">
        <h2>{course.name}</h2>
        <h3>{course.instructor}</h3>
        <p className='detailsCoursePop'>{course.coursedescription}</p>
        <div>Enorlment: {course.enrollmentStatus}</div>
        <div className='tour-duration'>{course.duration}</div>
        <div className='course-schedule-pop'>Schedule: {course.schedule}</div>
        <div className='tour-duration'>Mode: {course.location}</div>
        <div>{course.prerequisites}</div>
        <div className='container'>
            <button className='btn-red' onClick={syllabusHandler}>Show syllabus</button>     
            <button className='btn-red close-btn' onClick={onClose}>Close</button>
        </div>
        
      </div>
    </div>
  );
}

export default CourseDetailsPopup;
