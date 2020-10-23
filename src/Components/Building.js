import React from 'react';
import MeetingRoom from './MeetingRoom';

const Building = (props) => {
  const meetingRooms = props.buildingInfo.meetingRooms.length ? props.buildingInfo.meetingRooms.map((room, index) => (
    <MeetingRoom 
      key={Math.floor(Math.random()) + index} 
      meetingRoom={room}
    />
  )) : null;

  return (
    <>
      <div className="building-container">
        Name: <b>{props.buildingInfo.name}</b>
        <hr/>
        {meetingRooms ? meetingRooms : <div>No Rooms Available</div>}
      </div>
      <div>
      </div>
    </>
   )
} 

export default Building;