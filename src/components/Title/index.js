import React from "react";
import "./style.css";

//Dumb function

const Title = (props) => {
  return(
  <div className="navbar">
    <div className="title col-sm-12">
      <p id="headLine">Futurama Game: Click on an image to earn points, but only once!</p>
      <p id="statusLine">{props.status}</p>
      <p id="scoreLine" className="col-sm-12">Score: {props.currentScore} </p>
      <p id="topScoreLine" className="col-sm-12">Top Score: {props.topScore} </p>
    </div>
  </div>
  
)}

export default Title;
// {props.children}
