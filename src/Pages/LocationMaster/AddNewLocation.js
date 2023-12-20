import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";

const LocationMasterForm = () => {
  const [locationId, setLocationId] = useState("");
  const [locationName, setLocationName] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log("Location ID:", locationId);
    console.log("Location Name:", locationName);
    console.log("Longitude:", longitude);
    console.log("Latitude:", latitude);
  };

  const containerStyle = {
    display: "flex",
  };

  const tableStyle = {
    width: "80%",
  };
  return (
    <div style={containerStyle}>
      <div>
        <Sidebar />
      </div>
      <div style={{width:'70%'}}>
        <Header/>
      <div
        style={{
            tableStyle,
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          width: "450px",
          margin: "0 auto",
          height:"300px",
          marginTop:'200px',
          backgroundColor:'white'
        }}
      >
        <h2>Location Master</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <div style={{ marginRight: "10px" }}>
              <label htmlFor="locationId">Location ID:</label>
              <input
                type="text"
                id="locationId"
                value={locationId}
                onChange={(e) => setLocationId(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="locationName">Location Name:</label>
              <input
                type="text"
                id="locationName"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                required
              />
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <div style={{ marginRight: "10px" }}>
              <label htmlFor="longitude">Longitude:</label>
              <input
                type="text"
                id="longitude"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="latitude">Latitude:</label>
              <input
                type="text"
                id="latitude"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                required
              />
            </div>
          </div>
          <div style={{textAlign:'center', marginTop:'5%'}}>
            <button style={{color:'white', backgroundColor:'black', width:'200px', borderRadius:'5px', textAlign:'center'}} type="submit">Submit</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default LocationMasterForm;
