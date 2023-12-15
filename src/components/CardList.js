import React, { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import Card from './Card';


export default function CardList() {
  const { authToken } = useAuth();
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const res = fetch('http://localhost:5000/packages', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPackages(data);
       
      });
  }, []);

  return (
    <div className="" style={{backgroundColor:"#ade8f4"}}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {packages.map((data, index) => (
          <div key={index} style={{ flex: '0 0 33.33%', marginBottom: '15px' }}>
            <div className="card ml-7" style={{ width: "18rem", maxWidth: "400px" }}>
              {/* <img src="" className="card-img-top" alt="..."/> */}
              <div className="card-body">
                <div style={{display:"flex"}}><i class="bi bi-geo-fill"></i>
                <h2 className="">{data.src}</h2>
                </div>
               <div style={{display:"flex"}}> <i class="bi bi-geo-alt"></i><h2 className="">{data.dest}</h2></div>
                <p className="card-text">{data.description}</p>
                <h3>Price ₹{data.price}/-</h3>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
