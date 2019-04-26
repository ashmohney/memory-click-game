import React from "react";
import "./style.css";

//Dumb function here
const Wrapper = (props) => {
  return <div className="wrapper">{props.children}</div>;

}

export default Wrapper;