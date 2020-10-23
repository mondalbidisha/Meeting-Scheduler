import React from 'react';
import Building from './Building';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const GET_BUILDINGS_QUERY = gql`
  {
    Buildings {
      name
        meetingRooms {
        name
        meetings {
          title
          date
          startTime
          endTime
        }
      }
    }
  }`;

const MeetingBuildings = () => {

  const { data, loading, error } = useQuery(GET_BUILDINGS_QUERY);   

  if (loading) return <h1>Loading building information ...</h1>; // render loading state 
  if (error) return <h1>Something went wrong!</h1>; // render loading error state 
  
  return (
    <>
      <div className="all-buildings-container">
        {data && data.Buildings && data.Buildings.map((building, index) => (
            <Building 
            key={Math.floor(Math.random()) + index} 
            buildingInfo={building}
            />
          ))
        }
      </div>
      <Link to="/add-meeting">
        <button className="add-meeting-button">
          Add Meeting
        </button>
      </Link>
    </>
  )
} 

export default MeetingBuildings;