
import React, { useEffect, useState } from 'react'
import {useAuth} from '../Context/AuthContext'
import Card from './Card'

export default function CardList() {
    const {authToken}=useAuth()
    const [packages,setPackages]=useState([])
    
    useEffect( () => {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
        const res=  fetch('http://localhost:5000/packages',{
          method:'GET',
          headers: {
            'Content-Type':'application/json',
            'Authorization': token
          }
        }).then((resp)=>resp.json()
            
        ).then((data)=>{
            
            setPackages(data)
            console.log([...data])
        })
    },[])




    return (
        <div>
      {packages.map((data)=>(
        <div>
          <Card src={data. src} dest={data. dest} price={data. price} desc={data. description} > </Card>
        </div>
      ))}
        </div>
    )
}
