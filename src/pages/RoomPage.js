import React from "react";
export default function RoomPage() {
  return(
    <>
      <div className="container-fluid">
        <div className="row text-center">
          <h6>Our Rooms</h6>
        </div>
        <div className="row text-center">
          <h3>A World Of <span className="text-warning">Choice</span></h3>
        </div>
        <div className="row text-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse quibusdam, assumenda, tenetur.</p>
          <p className="my-n8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="img-1">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldyUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="View Hotel" />
              <p>3 GUESTS</p>
            </div>
            <div className="img-2">
              <img src="https://images.unsplash.com/photo-1593006526979-5f8814c229f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c21hbGwlMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Small Room" />
              <p>1 GUESTS</p>
            </div>
          </div>
          <div className="col-md-4">
            <img src="https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Luxury Room" />
            <p>6 GUESTS</p>
          </div>
          <div className="col-md-4">
            <div className="img-4">
              <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Appartment Room" />
              <p>5 GUESTS</p>
            </div>
            <div className="img-5">
              <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXBwYXJ0bWVudCUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Medium Room" />
              <p>4 GUESTS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
