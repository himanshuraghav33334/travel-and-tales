import React, { useEffect } from 'react'

export default function CardList() {

    if (authToken) {
        const res = fetch('http://localhost:5000/packages', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: ${authToken},
          },
        })
          .then((res) => res.json()).then((data) => {
            console.log(data);
          });
        
    
      }
      useEffect(()=>{
        loadData()
      },[]);


  return (
    <div>
      
    </div>
  )
}
