// Components/NotFound.jsx
import React, {useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center" style={{marginTop:"100px"}}>
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>

     
      <button className="mb-5 btn btn-primary" onClick={()=>navigate("/")}>Back to home</button>
    </div>
  );
}
