import React, { useState } from 'react';

const Form = () => {
  
  const [meetingTitle, updateTtile] = useState();

  const [meetingLocation, updateLocation] = useState();

  const [meetingStartDate, updateStartDate] = useState();

  const [meetingEndDate, updateEndDate] = useState();

  return (
      <form className="form-element">
        <div>
          <label>Title</label>
          <input 
            type="text"
            name="Title"
            value={meetingTitle}
            placeholder="Enter meeting title"
            onChange={(e) => updateTtile(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Building</label>
          <input 
            type="text"
            name="Building"
            value={meetingLocation}
            placeholder="Enter building name"
            onChange={(e) => updateLocation(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Start Time</label>
          <input 
            type="date"
            name="startTime"
            value={meetingStartDate}
            onChange={(e) => updateStartDate(e.target.value)}
          ></input>
        </div>
        <div>
          <label>End Time</label>
          <input 
            type="date"
            name="endTime"
            value={meetingEndDate}
            onChange={(e) => updateEndDate(e.target.value)}
          ></input>
        </div>
        <div className="justify-center">
          <button className="add-meeting-button">CREATE MEETING</button>
        </div>
      </form>
  )
} 

export default Form;
