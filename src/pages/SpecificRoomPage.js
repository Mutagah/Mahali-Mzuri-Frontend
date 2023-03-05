import React, { useEffect,useState } from "react"
import {useParams } from "react-router-dom";
export default function SpecificRoomPage(){
    const [roomTypeData, setRoomTypeData] = useState([])
    const params = useParams();
    useEffect(()=>{
    fetch(`http://localhost:3000/api/v1/room_types/${params.id}`)
  .then(response => response.json())
  .then((data)=> {
    setRoomTypeData(data)
  })
  },[params])
  console.log(roomTypeData)
    return (
        <main>This is Specific room page</main>
    )
}