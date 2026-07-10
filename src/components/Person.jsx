import React,{useState} from 'react'

export default function Person({ name }) {

const [user,setUser] = useState(name)
  let handelLogout = () => {
    setUser("anonamoys")
  }
  
  return (
    <div>
      <h1>name:{user}</h1>
      <button onClick={()=>handelLogout()} >Logout</button>
    </div>
  )
}
