import { React, useEffect, useState } from "react";
import FormList from "./FormList";

const Form = () => {
  const [post, setPost] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/photos";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // console.log("jsoon", json);
        setPost(json.splice(0, 10));
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);

  console.log(post);
  return <div className="map">
    {post.map((item)=> <FormList post={item}/>)}
   


  </div>;
};

export default Form;
