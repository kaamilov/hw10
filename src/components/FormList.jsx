import React from "react";
import "./FormList.css";
const FormList = (props) => {
  // console.log(props.post.id);
  return (
      <div className="container">
        <div className="head">
          <h5>{props.post.title}</h5>
          <span className="id">{props.post.id}</span>
        </div>
        <div className="text">text</div>
        <img src={props.post.url} alt="" />
      </div>
    
  );
};

export default FormList;
