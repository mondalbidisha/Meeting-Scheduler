
let data; // be the array that contains all the information about the all meeting rooms

// {
//   MeetingRooms {
//     name
//     floor
//     building {
//       name
//     }
//     meetings {
//       title
// 			startTime
// 			endTime
// 			date
//     }
//   }
// }
function fetchRoomInfo() {
  // fetch data from the api and populate the data array with fresh availability of meeting rooms
  // return result; 
}

setInterval(async () => {
  // Implement a polling mechanism to keep fetching data from the server every x seconds 
  // and rerun the room fetching code everytime to prevent stale data
  // set the data variable with new data fetched from the api
  data = await fetchRoomInfo();
  findRooms(start, end);
}, 10000);

function findRooms(startDate, endDate, data) {
  let availableRooms = []; // return array of available meeting rooms that can be booked within a particular timeslot

  if(!start || !end) {
    // error start and/or entime is required to find available rooms
    // return;
  }else if(start === end) {
    // error start and end time cannot be same
    // return;
  } else if(start > end) {
    // error end time cannot be before start time
    // return;
  } else if(start < currentTime || end < currentTime) {
    // error start time and/or end time cannot be lesser than current date and time
    // return;
  }

  data.meetingsRooms.forEach((room) => {
    if(room.meetings.length) {
      room.meeting.forEach((meeting) => {
        if(checkAvailability(startDate, endDate, meeting)) {
          if(!availableRooms.includes(room)) {
            availableRooms.push(room);     
          }
        } 
      })
    } else {
      if(!availableRooms.includes(room)) {
        availableRooms.push(room);
      }
    }
  })

  return availableRooms;
}

function checkAvailability(start, end, meeting) {
  let meetingStartTime = meeting.startTime;
  let meetingEndTime = meeting.endTime;

  let canBook = false;

  if(start < meetingStartTime && end <= meetingStartTime) {
    canBook = true;
  } else if(start >= meetingEndTime && end > meetingEndTime) {
    canBook = true;
  } else if(start >= meetingStartTime && end <= meetingEndTime) {
    canBook = false;
  }

  return canBook;
}