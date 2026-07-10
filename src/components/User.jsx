import React, { useState,useEffect } from 'react'

export default function User() {

  const[data,setData]=useState([])

  
  useEffect(() => {
   async function user() {
     let res = await fakeFetch("https://example.com/api/users/status");
    
     console.log(res);
     
      setData(res.data.users)
    }
user()
 
  }, [])
  
  return (
    <div>
      {
      data.map((item, idx) => {
          return <div key={idx} style={{color:item.status ==="Online"?"green":"red"}}>{item.name}</div>
        })
      }
    </div>
  )
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users/status") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            users: [
              { name: "Raju", status: "Online" },
              { name: "Pankaj", status: "Offline" },
              { name: "Sakshi", status: "Offline" },
              { name: "Kishore", status: "Offline" },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "No users Found",
        });
      }
    }, 2000);
  });
};

