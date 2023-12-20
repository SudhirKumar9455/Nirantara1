import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/LoginPage/Login";
import LocationMaster from "../Pages/LocationMaster/LocationMaster";
import AddNewLocation from "../Pages/LocationMaster/AddNewLocation";
import FuelMaster from "../Pages/FuelMaster/FuelMaster";
import AddNewFuelType from "../Pages/FuelMaster/AddNewFuelType";
import VehicleMaster from "../Pages/VehicleMaster/VehicleMaster";
import AddNewVehicleMaster from "../Pages/VehicleMaster/AddNewVehicleMaster";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Trip from "../Pages/Trip/Trip";

const Index = () => {
  return (
    <div>
      {/* Here, the Routing of the complete pages have been done */}
      <Routes>
        {/* Routing of the Login Page */}
        <Route path="/" element={<Login />} />
        {/* Routing of the Location Master Page */}
        <Route path="/LocationMaster" element={<LocationMaster />}></Route>
        <Route path="/AddNewLocationMaster" element={<AddNewLocation />} />
        {/* Routing of the Fuel Master Page */}
        <Route path="/fuelmaster" element={<FuelMaster />} />
        <Route path="/AddNewFuelType" element={<AddNewFuelType />} />
        {/* Routing of the Vehicle Master Page */}
        <Route path="/VehicleMaster" element={<VehicleMaster />} />
        <Route path="/AddNewVehicleMaster" element={<AddNewVehicleMaster />} />
        {/* Routing of the Dashbaord Page*/}
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* Routing of the Trip Page */}
        <Route path="/trips" element={<Trip />} />
      </Routes>
    </div>
  );
};

export default Index;
