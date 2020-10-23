import React from 'react';

const Meeting = (props) => {
  return (
    <>
      <ul>
        <li><strong>Meeting:</strong> {props.meet.title}</li>
        <li><strong>Date:</strong> {props.meet.date}</li>
        <li><strong>From:</strong> {props.meet.startTime}</li> 
        <li><strong>To:</strong> {props.meet.endTime}</li>
      </ul>
      <hr/>
    </>
   )
} 

export default Meeting;