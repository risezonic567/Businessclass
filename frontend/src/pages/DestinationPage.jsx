import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom' 
import { DESTINATIONS_DATA } from "../DestinationData/destination";
import { 
  ChevronRight, 
  MapPin 
} from 'lucide-react'


export default function Destinations() {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const destinations = Object.values(DESTINATIONS_DATA);

const filteredDestinations = destinations.filter((d) =>
  d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  d.code.toLowerCase().includes(searchQuery.toLowerCase())
)

 
  const handleDestinationClick = (dest) => {
    navigate(`/flight-to/${dest.id}`)
  }


  return (
    <div className="text-light min-vh-100 font-sans">
      <style>{`
        .bg-dark-slate { background-color: #020617; }
        .bg-card-dark { background-color: rgba(15, 23, 42, 0.7); }
        .text-amber { color: #db2114; }
        .bg-amber-soft { background-color: rgba(245, 158, 11, 0.1); }
        .btn-amber { background-color: #f59e0b; color: #020617; font-weight: 700; border: none; }
        .btn-amber:hover { background-color: #d97706; color: #020617; }
        .card-dest { transition: all 0.3s ease; cursor: pointer; }
        .card-dest:hover { border-color: #475569 !important; transform: translateY(-4px); }
      `}</style>

      <section className="py-5 container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-2">
          <div>
            <h2 className="h3 fw-bold text-black mb-1">Popular Business Class Routes</h2>
            <p className="text-secondary mb-0">Handpicked premium routes updated with live estimate rates.</p>
          </div>
          <span className="small text-secondary">
            Showing <span className="text-amber fw-bold">{filteredDestinations.length}</span> destinations
          </span>
        </div>

        <div className="row g-4">
          {filteredDestinations.map((dest) => (
            <div key={dest.id} className="col-12 col-sm-6 col-lg-4 col-xl-4">
              <div
                onClick={() => handleDestinationClick(dest)}
                className="card text-black rounded-4 border-slate-800 overflow-hidden card-dest h-100"
              >
                <div className="position-relative" style={{ height: '200px' }}>
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <span className="position-absolute top-0 end-0 m-3 badge rounded-pill text-amber border border-warning border-opacity-25 px-2.5 py-1">
                    {dest.tag}
                  </span>
                  <span className="position-absolute bottom-0 start-0 m-3 badge text-white font-monospace border border-slate-800">
                    {dest.code}
                  </span>
                </div>
                <div className="card-body d-flex flex-column justify-content-between p-4">
                  <div>
                    <h5 className="fw-bold text-black mb-1">{dest.name}</h5>
                    {/* <p className="small text-secondary d-flex align-items-center gap-1 mb-3">
                      <MapPin size={14} /> {dest.country}
                    </p> */}
                  </div>

                  <div className="d-flex align-items-center justify-content-between pt-3 border-top border-slate-800">
                    <div>
                      <span className="small text-secondary d-block">Read More</span>
                      {/* <span className="h5 fw-bold text-black mb-0">${dest.price}</span> */}
                    </div>
                    <button 
                      className="btn btn-sm bg-amber-soft text-amber rounded-3 p-2 border-0"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDestinationClick(dest);
                      }}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}