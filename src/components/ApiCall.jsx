import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApiCall() {
  const [data,setData] = useState([])
  const api = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(api);
         setData(response)
    };
    fetchData();
  }, []);

  return (
    <div>
      {
        data.map((item) => {
          return <div style={{borderBottom:"1px solid black"}}>{item.title }</div>
        })
   }
    </div>
  );
}
