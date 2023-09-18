import React from "react";
import { useNavigate } from "react-router-dom";
import "./UnderConstruction.scss";
import FadeLoader from "react-spinners/FadeLoader";

const UnderConstruction = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 1200);
  return (
    <div className="underConstruction">
      <FadeLoader className="spinner"/>
      <h1>Under Construction.</h1> 
    </div>
  );
};

export default UnderConstruction;
