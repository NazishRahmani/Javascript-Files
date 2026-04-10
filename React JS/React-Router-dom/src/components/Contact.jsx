import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
     const navigate = useNavigate();
     function changePath(){
          navigate(-1);
     }
  return (
    <>
      <div>Contact</div>
      <button onClick={changePath}>Go Back</button>
    </>
  );
};

export default Contact;
