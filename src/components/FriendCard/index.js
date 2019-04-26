import React from "react";
import "./style.css";

// Dumb function

const FriendCard = (props) => {
  return (
    <div id={props.id} value={props.id}  onClick={() => props.handleEventClick(props.id)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>  
        {/* <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {props.occupation}
            </li>
            <li>
              <strong>Origin:</strong> {props.location}
            </li>

          </ul>
        </div> */}
    </div>
  );
}

export default FriendCard;