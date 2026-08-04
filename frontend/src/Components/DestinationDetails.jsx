// src/pages/DestinationDetail.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom' ; 
import { DESTINATIONS_DATA } from "../DestinationData/destination";
import { Plane, MapPin, CheckCircle } from 'lucide-react';

export default function DestinationDetail() {
  // URL se id milegi (e.g. /destination/london -> slug = 'london')
  const { slug } = useParams(); 
  const destination = DESTINATIONS_DATA[slug];

  const [passengers, setPassengers] = useState(1);

  if (!destination) {
    return (
      <div className="container py-5 text-center text-white">
        <h2>Destination Not Found!</h2>
        <Link to="/destination" className="btn btn-warning mt-3">View All Destinations</Link>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img 
              src={destination.image} 
              alt={destination.name} 
              className="img-fluid rounded-4 shadow-lg w-100" 
              style={{ maxHeight: '450px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-lg-6">
            <span className="badge bg-warning text-dark mb-2 px-3 py-2 fs-6">
              {destination.tag}
            </span>
            <h1 className="display-4 fw-bold">{destination.name} ({destination.code})</h1>
            <p className="text-secondary fs-5">
              <MapPin size={18} className="me-1" /> {destination.country}
            </p>
            <p className="mt-3">{destination.description}</p>

            <div className="p-4 rounded-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 mt-4">
              <span className="text-secondary small d-block">Starting Fare per seat</span>
              <div className="display-6 fw-bold text-warning">${destination.price}</div>

              <button className="btn btn-warning w-100 mt-4 py-3 font-weight-bold d-flex align-items-center justify-content-center gap-2">
                <Plane size={20} /> Search Business Class Fares to {destination.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}