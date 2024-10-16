import React from "react";
import ProfileList from "./components/ProfileList";
import AdminDashboard from "./components/AdminDashboard";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Profile and Map Viewer</h1>
      <ProfileList />
      <AdminDashboard />
    </div>
  );
}

export default App;
