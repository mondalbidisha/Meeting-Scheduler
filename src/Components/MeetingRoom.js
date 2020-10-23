import React from 'react';
import Meeting from './Meeting';

const MeetingRoom = (props) => {
  const meetings = props.meetingRoom.meetings.length ? props.meetingRoom.meetings.map((meet, index) => (
    <Meeting key={index} meet={meet}/>
  )) : null;

  return (
    <div className="meeting-room-container">
      <h3>
        <strong>Room - </strong>
        {props.meetingRoom.name}
      </h3>
      {meetings}
    </div>
   )
} 

export default MeetingRoom;